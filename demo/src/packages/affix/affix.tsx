/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IAffixProps, IAffixState, targetType } from './types';
import Constant from '../constant';

const Name = 'Affix';
const ClassName = `${Constant.PREFIX}${Name}`;

/**
 * Affix
 * @class Affix
 * @classdesc Affix
 */
class Affix extends React.Component<IAffixProps, IAffixState> {
  // 滚动元素
  scrollEl: Window | HTMLElement = window;
  // self元素
  el: HTMLElement = window.document.body;
  // self距离容器的top
  selfTop: number = 0;
  // state
  state: IAffixState = {
    isTopFixed: false,
    isBottomFixed: false,
  };

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount(): void {
    const { target } = this.props;
    this.setTarget(target as targetType);
  }

  componentWillReceiveProps(nextProps: Readonly<IAffixProps>, nextContext: any): void {
    this.setState(
      {
        isTopFixed: false,
        isBottomFixed: false,
      },
      () => {
        this.setTarget(nextProps.target as targetType);
      },
    );
  }

  componentWillUnmount(): void {
    this.scrollEl.removeEventListener('scroll', this.onScroll);
  }

  /**
   * setTarget - 设置target
   */
  setTarget(target: targetType): void {
    // 设置target
    window.setTimeout(() => {
      if (target) {
        this.scrollEl = target();
      }
      this.selfTop = this.getOffsetTop();
      this.scrollEl.removeEventListener('scroll', this.onScroll);
      this.scrollEl.addEventListener('scroll', this.onScroll);
    });
  }

  /**
   * getOffsetTop
   * @return number
   */
  getOffsetTop(): number {
    let current: Element | HTMLElement | null = this.el;
    let top: number = 0;
    while (current !== null && current !== this.scrollEl) {
      top = top + (current as HTMLElement).offsetTop;
      current = (current as HTMLElement).offsetParent;
    }
    return top;
  }

  /**
   * getScrollEl
   * @param el
   */
  getScrollEl(el: HTMLElement | Document | EventTarget | null): HTMLElement {
    let scrollEl;
    if (el instanceof Document) {
      scrollEl = el.documentElement;
    } else if (el instanceof Window) {
      scrollEl = el.document.documentElement;
    } else {
      scrollEl = el;
    }

    return scrollEl;
  }

  /**
   * onScroll
   * @param e
   */
  onScroll(e: Event): void {
    const target: EventTarget | null = e.target;
    const scrollEl = this.getScrollEl(target);

    const { scrollTop } = scrollEl;

    if ('offsetTop' in this.props) {
      // top 元素位置 - top 最大值是元素位置       最小值是0 超出最大值就是0
      const { offsetTop = 0, onChange } = this.props;

      const top = offsetTop > this.selfTop ? 0 : this.selfTop - offsetTop;

      let isTopFixed: boolean = false;

      // console.log(this.selfTop, scrollTop, top);

      if (scrollTop >= top) {
        isTopFixed = true;
      } else {
        isTopFixed = false;
      }

      this.setState(
        {
          isTopFixed,
        },
        () => {
          if (onChange) {
            onChange(scrollTop);
          }
        },
      );
    } else if ('offsetBottom' in this.props) {
      // bottom 容器高度 - bottom 最大值是容器高度 最小值是0 超出最大值就是0
      const { offsetBottom = 0, onChange } = this.props;

      const scrollContainerHeight = this.getScrollEl(this.scrollEl).clientHeight;
      const top =
        this.selfTop -
        scrollContainerHeight -
        (offsetBottom > scrollContainerHeight ? 0 : offsetBottom);

      let isBottomFixed: boolean = false;

      // console.log(this.selfTop, scrollContainerHeight, scrollTop, top);

      if (top < 0) {
        isBottomFixed = false;
      } else {
        if (scrollTop >= top) {
          isBottomFixed = true;
        } else {
          isBottomFixed = false;
        }
      }

      this.setState(
        {
          isBottomFixed,
        },
        () => {
          if (onChange) {
            onChange(scrollTop);
          }
        },
      );
    }
  }

  /**
   * getTop
   * @return number
   */
  getTop(): number {
    const { offsetTop = 0 } = this.props;
    if (this.scrollEl instanceof Window) {
      return offsetTop;
    } else {
      const { top } = this.scrollEl.getBoundingClientRect();
      return top + offsetTop;
    }
  }

  /**
   * getBottom
   * @return number
   */
  getBottom(): number {
    const { offsetBottom = 0 } = this.props;
    if (this.scrollEl instanceof Window) {
      return offsetBottom;
    } else {
      const bottom = window.document.documentElement.clientHeight - this.scrollEl.getBoundingClientRect().bottom;
      return bottom + offsetBottom;
    }
  }

  render(): React.ReactElement {
    const { children, className = '', style = {} } = this.props;
    const { isTopFixed, isBottomFixed } = this.state;

    return (
      <div
        ref={(el: HTMLDivElement) => {
          this.el = el;
        }}
        style={Object.assign(
          {
            top: isTopFixed ? `${this.getTop()}px` : 'auto',
            bottom: isBottomFixed ? `${this.getBottom()}px` : 'auto',
          },
          style,
        )}
        className={classNames(
          ClassName,
          isTopFixed || isBottomFixed ? 'Fixed' : '',
          ...className.split(' '),
        )}
      >
        {children}
      </div>
    );
  }
}

export default Affix;
