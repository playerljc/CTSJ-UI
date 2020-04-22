/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { ICommonProps } from './types';
import { ConfigConsumer } from '../config-provider/context';

const Name = 'layout-sider';

/**
 * Sider
 * @class ConfigProvider
 * @classdesc Sider
 */
class Sider extends React.Component<ICommonProps, any> {
  renderSider = ({ getPrefixCls }) => {
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
    return <ConfigConsumer>{this.renderSider}</ConfigConsumer>;
  }
}

export default Sider;
