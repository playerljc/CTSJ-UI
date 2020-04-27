/* 组件typescript类型的定义 */

import { ICommonProps } from '../types';

/**
 * IRowProps
 * @class IRowProps
 * @classdesc IRowProps
 */
export interface IRowProps extends ICommonProps {
  // 垂直对齐方式
  align?: 'top' | 'middle' | 'bottom';
  // 栅格间隔，可以写成像素值来设置水平间隔。或者使用数组形式同时设置 [水平间距, 垂直间距]。
  gutter?: number | [number, number];
  // 水平排列方式
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

/**
 * IColProps
 * @class IColProps
 * @classdesc IColProps
 */
export interface IColProps extends ICommonProps {
  // flex 布局属性
  flex?: number | string;
  // 栅格左侧的间隔格数，间隔内不可以有栅格
  offset?: number;
  // 栅格顺序
  order?: number;
  // 栅格占位格数，为 0 时相当于 display: none
  span?: number;
}
