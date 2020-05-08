/* 组件typescript类型的定义 */
import { ICommonProps } from '../types';

/**
 * IDividerProps
 * @class IDividerProps
 * @classdesc IDividerProps
 */
export interface IDividerProps extends ICommonProps {
  // 是否虚线
  dashed?: boolean;
  // 分割线标题的位置
  orientation?: 'left' | 'right' | 'center';
  // 水平还是垂直类型
  type?: 'horizontal' | 'vertical';
  // 文字是否显示为普通正文样式
  plain?: boolean;
}

export enum Orientation {
  left = 'left',
  right = 'right',
  center = 'center',
}

export enum Type {
  horizontal = 'horizontal',
  vertical = 'vertical',
}
