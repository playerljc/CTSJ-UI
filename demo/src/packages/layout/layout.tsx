/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { ILayoutProps } from './types';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sider from './sider';
import { ConfigConsumer } from '../config-provider/context';

const Name = 'layout';

/**
 * Layout
 * @class ConfigProvider
 * @classdesc Layout
 */
class Layout extends React.Component<ILayoutProps, any> {
  static Header = Header;
  static Footer = Footer;
  static Content = Content;
  static Sider = Sider;

  renderLayout = ({ getPrefixCls }) => {
    const { children, className = '', style = {}, auto = false, ...other } = this.props;
    return (
      <div
        style={style}
        className={classNames(getPrefixCls(Name), auto ? 'auto' : '', ...className.split(' '))}
        {...other}
      >
        {children}
      </div>
    );
  };

  render(): React.ReactElement {
    return <ConfigConsumer>{this.renderLayout}</ConfigConsumer>;
  }
}

export default Layout;
