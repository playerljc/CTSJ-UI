/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IContentProps } from './types';
import { ConfigConsumer } from '../config-provider/context';

const Name = 'layout-content';

/**
 * Content
 * @class ConfigProvider
 * @classdesc Content
 */
class Content extends React.Component<IContentProps, any> {
  renderContent = ({ getPrefixCls }) => {
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
    return <ConfigConsumer>{this.renderContent}</ConfigConsumer>;
  }
}

export default Content;
