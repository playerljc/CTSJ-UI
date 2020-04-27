/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { ICommonProps } from '../types';
import { ConfigConsumer } from '../config-provider/context';

const Name = 'layout-footer';

/**
 * Footer
 * @class ConfigProvider
 * @classdesc Footer
 */
class Footer extends React.Component<ICommonProps, any> {
  renderFooter = ({ getPrefixCls }) => {
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
    return <ConfigConsumer>{this.renderFooter}</ConfigConsumer>;
  }
}

export default Footer;
