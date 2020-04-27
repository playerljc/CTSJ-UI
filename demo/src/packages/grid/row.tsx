/* 组件js实现 */

import React from 'react';
import classNames from 'classnames';

import { IRowProps } from './types';
import { ConfigConsumer, ConfigContext } from '../config-provider/context';
import { RowContext } from './rowContext';

const Name = 'row';

const rowAlignMap = new Map([
  ['top', 'flex-start'],
  ['middle', 'center'],
  ['bottom', 'flex-end'],
  ['start', 'flex-start'],
  ['end', 'flex-end'],
  ['center', 'center'],
  ['space-around', 'space-around'],
  ['space-between', 'space-between'],
]);

/**
 * Row
 * @class ConfigProvider
 * @classdesc Row
 */
class Row extends React.Component<IRowProps, any> {
  getStyle(): React.CSSProperties {
    const { align, justify } = this.props;
    const style: React.CSSProperties = {};

    if (justify) {
      style.justifyContent = rowAlignMap.get(justify);
    }

    if (align) {
      style.alignItems = rowAlignMap.get(align);
    }

    return style;
  }

  renderRow = ({ getPrefixCls }) => {
    const { children, className = '', style = {} } = this.props;
    return (
      <div
        style={Object.assign(style, this.getStyle())}
        className={classNames(
          getPrefixCls(Name),
          // align 转化成样式
          // gutter 转换成样式
          // justify 转换成样式
          ...className.split(' '),
        )}
      >
        {children}
      </div>
    );
  };

  getValue(): IRowProps {
    const { style, className, ...other } = this.props;
    return other;
  }

  render(): React.ReactElement {
    return (
      <RowContext.Provider value={this.getValue()}>
        <ConfigConsumer>{this.renderRow}</ConfigConsumer>
      </RowContext.Provider>
    );
  }
}

export default Row;
