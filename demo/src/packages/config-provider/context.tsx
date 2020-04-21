import React from 'react';
import {ConfigConsumerProps} from './types';

export const ConfigContext: React.Context<ConfigConsumerProps> = React.createContext<ConfigConsumerProps>({
  getPrefixCls: () => '',
  local: 'zh-CN'
});

export const ConfigConsumer = ConfigContext.Consumer;
