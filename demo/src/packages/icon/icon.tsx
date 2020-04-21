/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IConProps } from './types';
import { ConfigConsumer } from '../config-provider/context';

const Name = 'Icon';

/**
 * Icon
 * @class Icon
 * @classdesc Icon
 */
class Icon extends React.Component<IConProps> {
  renderIcon = ({ getPrefixCls }) => {
    const { children, className = '', type, ...other } = this.props;
    return (
      <i
        className={classNames(getPrefixCls(Name), `fa fa-${type}`, ...className.split(' '))}
        {...other}
      >
        {children}
      </i>
    );
  };

  render(): React.ReactElement {
    return <ConfigConsumer>{this.renderIcon}</ConfigConsumer>;
  }
}

export default Icon;
