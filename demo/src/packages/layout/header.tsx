/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { ICommonProps } from '../types';
import { ConfigConsumer } from '../config-provider/context';

const Name = 'layout-header';

/**
 * Header
 * @class ConfigProvider
 * @classdesc Header
 */
class Header extends React.Component<ICommonProps, any> {
  renderHeader = ({ getPrefixCls }) => {
    const { children, className = '', style = {}, ...other } = this.props;
    return (
      <div
        style={style}
        className={classNames(getPrefixCls(Name), ...className.split(' '))}
        {...other}
      >
        {children}
      </div>
    );
  };

  render(): React.ReactElement {
    return <ConfigConsumer>{this.renderHeader}</ConfigConsumer>;
  }
}

export default Header;
