/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IColProps, IRowProps } from './types';
import { ConfigConsumer } from '../config-provider/context';
import { RowConsumer } from './rowContext';

const Name = 'col';

/**
 * Col
 * @class ConfigProvider
 * @classdesc Col
 */
class Col extends React.Component<IColProps, any> {
  rowProps: IRowProps = {};

  renderCol = (rowProps: IRowProps) => {
    this.rowProps = rowProps;
    return <ConfigConsumer>{this.renderColInner}</ConfigConsumer>;
  };

  renderColInner = ({ getPrefixCls }) => {
    const { children, className = '', style = {}, span, offset } = this.props;
    return (
      <div
        style={Object.assign(style, this.getStyle())}
        className={classNames(
          getPrefixCls(Name),
          // span 转换成样式
          span ? `${getPrefixCls(Name)}-${span}` : '',
          offset ? `${getPrefixCls(Name)}-offset-${offset}` : '',
          ...className.split(' '),
        )}
      >
        {children}
      </div>
    );
  };

  getStyle(): React.CSSProperties {
    const {
      // flex 布局属性
      flex,
      // 栅格顺序
      order,
    } = this.props;

    const {
      // 栅格间隔，可以写成像素值来设置水平间隔。或者使用数组形式同时设置 [水平间距, 垂直间距]。
      gutter,
    } = this.rowProps;

    const style: React.CSSProperties = {};

    if (flex) {
      style.flex = flex;
    }

    if (order) {
      style.order = order;
    }

    if (gutter) {
      if (gutter instanceof Number) {
        const padding = (gutter as number) / 2;
        style.paddingLeft = padding;
        style.paddingRight = padding;
      } else if (gutter instanceof Array) {
        const [hp, vp] = gutter as [number, number];
        style.padding = `${hp / 2}px ${vp / 2}px`;
      }
    }

    return style;
  }

  render(): React.ReactElement {
    return <RowConsumer>{this.renderCol}</RowConsumer>;
  }
}

export default Col;
