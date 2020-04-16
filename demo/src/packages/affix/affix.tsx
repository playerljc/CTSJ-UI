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
  state: IAffixState = {
    isFixed: false,
  };

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount(): void {
    const { target } = this.props;
    if (target) {
      this.targetEl = target();
    }

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

    const { offsetTop = 0, offsetBottom, onChange } = this.props;

    if (scrollTop === offsetTop) {
      this.setState({
        isFixed: false,
      });
    } else {
      this.setState({
        isFixed: true,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { isFixed } = this.state;
    return <div className={classNames(ClassName, isFixed ? 'Fixed' : '')}>{children}</div>;
  }
}

export default Affix;
