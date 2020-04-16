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
  targetEl: Window | HTMLElement = window;
  el: HTMLDivElement | Window = window;
  state: IAffixState = {
    isFixed: false,
  };
  offsetTop: number = 0;

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount(): void {
    const { target } = this.props;
    if (target) {
      this.targetEl = target();
    }

    this.offsetTop = (this.el as HTMLDivElement).offsetTop;
    this.targetEl.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(): void {
    this.targetEl.removeEventListener('scroll', this.onScroll);
  }

  onScroll(e: Event) {
    const target: EventTarget | null = e.target;
    let el;
    if (target instanceof Document) {
      el = target.documentElement;
    } else {
      el = target;
    }

    const { scrollTop } = el;

    const { offsetTop: offsetProp = 0, offsetBottom, onChange } = this.props;
    const { offsetTop } = this;

    if (scrollTop >= offsetTop + offsetProp) {
      this.setState({
        isFixed: true,
      });
    } else {
      this.setState({
        isFixed: false,
      });
    }
  }

  render() {
    const { children, className = '', style = {} } = this.props;
    const { isFixed } = this.state;
    return (
      <div
        ref={(el: HTMLDivElement) => {
          this.el = el;
        }}
        style={style}
        className={classNames(ClassName, isFixed ? 'Fixed' : '', ...className.split(' '))}
      >
        {children}
      </div>
    );
  }
}

export default Affix;
