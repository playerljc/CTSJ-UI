/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IDividerProps, Orientation, Type } from './types';
import { ConfigConsumer } from '../config-provider/context';
import get = Reflect.get;

const Name = 'divider';

/**
 * Divider
 * @class ConfigProvider
 * @classdesc Divider
 */
class Divider extends React.Component<IDividerProps, any> {
  renderDivider = ({ getPrefixCls }) => {
    const {
      children,
      className = '',
      style = {},

      dashed = false,
      orientation = Orientation.center,
      type = Type.horizontal,
      plain = false,
    } = this.props;

    // // 是否虚线
    // dashed?: boolean;
    // // 分割线标题的位置
    // orientation?: 'left' | 'right' | 'center';
    // // 水平还是垂直类型
    // type?: 'horizontal' | 'vertical';
    // // 文字是否显示为普通正文样式
    // plain?: boolean;

    return (
      <div
        style={style}
        className={classNames(
          getPrefixCls(Name),
          getPrefixCls(`${Name}-${type}`), // 类型[垂直|水平]
          getPrefixCls(`${Name}-text-${orientation}`), // 文字对齐方式
          dashed ? getPrefixCls(`${Name}-text-dashed`) : '', // 是否是虚线
          plain ? getPrefixCls(`${Name}-text-plain`) : '', // 是否为普通文字
          children ? getPrefixCls(`${Name}-text`) : '',
          ...className.split(' '),
        )}
      >
        {children ? <div className={getPrefixCls(`${Name}-inner-text`)}>{children}</div> : null}
      </div>
    );
  };

  render(): React.ReactElement {
    return <ConfigConsumer>{this.renderDivider}</ConfigConsumer>;
  }
}

export default Divider;
