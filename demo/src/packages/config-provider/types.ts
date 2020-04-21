/* 组件typescript类型的定义 */

/**
 * ConfigConsumerProps
 * @class ConfigConsumerProps
 * @classdesc ConfigConsumerProps
 */
export interface ConfigConsumerProps extends IProps {
  getPrefixCls: (cls: string) => string;
}

/**
 * IProps
 * @class IProps
 * @classdesc IProps
 */
export interface IProps {
  local: 'zh-CN' | 'en-US';
}
