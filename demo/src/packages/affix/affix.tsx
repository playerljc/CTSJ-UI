/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IAffixProps, IAffixState } from './types';
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
    const { target = null } = this.props;
    if (target) {
      window.setTimeout(() => {
        this.scrollEl = target();
        this.selfTop = this.el.offsetTop;
        this.scrollEl.removeEventListener('scroll', this.onScroll);
        this.scrollEl.addEventListener('scroll', this.onScroll);
      });
    }
  }

  componentWillUnmount(): void {
    this.scrollEl.removeEventListener('scroll', this.onScroll);
  }

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

  onScroll(e: Event): void {
    const target: EventTarget | null = e.target;
    const scrollEl = this.getScrollEl(target);

    const { scrollTop } = scrollEl;

    if ('offsetTop' in this.props) {
      // top 元素位置 - top 最大值是元素位置       最小值是0 超出最大值就是0
      const { offsetTop = 0 } = this.props;

      const top = offsetTop > this.selfTop ? 0 : this.selfTop - offsetTop;

      console.log(scrollTop, this.selfTop, top);

      if (scrollTop >= top) {
        this.setState({
          isTopFixed: true,
        });
      } else {
        this.setState({
          isTopFixed: false,
        });
      }
    } else if ('offsetBottom' in this.props) {
      // bottom 容器高度 - bottom 最大值是容器高度 最小值是0 超出最大值就是0
      const { offsetBottom = 0 } = this.props;

      const scrollContainerHeight = this.getScrollEl(this.scrollEl).offsetHeight;
      const top =
        this.selfTop -
        scrollContainerHeight -
        (offsetBottom > scrollContainerHeight ? 0 : offsetBottom);

      console.log(scrollTop, this.selfTop, top);

      if (top < 0) {
        this.setState({
          isBottomFixed: false,
        });
      } else {
        if (scrollTop >= top) {
          this.setState({
            isBottomFixed: true,
          });
        } else {
          this.setState({
            isBottomFixed: false,
          });
        }
      }
    }
  }

  getTop() {
    const { offsetTop = 0 } = this.props;
    if(this.scrollEl instanceof Window) {
      return offsetTop;
    } else {
      const {top} = this.scrollEl.getBoundingClientRect();
      return top + offsetTop;
    }
  }

  getBottom() {
    const { offsetBottom = 0 } = this.props;
    if(this.scrollEl instanceof Window) {
      return offsetBottom;
    } else {
      const {bottom} = this.scrollEl.getBoundingClientRect();
      return bottom - offsetBottom;
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
        style={Object.assign(style, {
          top: isTopFixed ? `${this.getTop()}px` : 'auto',
          bottom: isBottomFixed ? `${this.getBottom()}px` : 'auto',
        })}
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
