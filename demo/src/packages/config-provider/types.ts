/* 组件typescript类型的定义 */

/**
 * ConfigConsumerProps
 * @class ConfigConsumerProps
 * @classdesc ConfigConsumerProps
 */
export interface ConfigConsumerProps extends IProps {
  // 设置组件的根样式
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
