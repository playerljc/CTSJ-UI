/* 组件js实现 */

import React from 'react';

import { IProps, ConfigConsumerProps } from './types';
import { ConfigContext } from './context';

/**
 * ConfigProvider
 * @class ConfigProvider
 * @classdesc ConfigProvider
 */
class ConfigProvider extends React.Component<IProps, any> {
  getValue(): ConfigConsumerProps {
    return {
      getPrefixCls(cls: string): string {
        return `ctsj-ui-${cls}`;
      },
      local: this.props.local,
    };
  }

  render() {
    const { children } = this.props;
    return <ConfigContext.Provider value={this.getValue()}>{children}</ConfigContext.Provider>;
  }
}

export default ConfigProvider;
