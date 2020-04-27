/* 组件typescript类型的定义 */
import { ICommonProps } from '../types';

export type targetType = () => Window | HTMLElement;

export type onChangeType = (value: number) => void;

/**
 * IAffixProps
 * @class IAffixProps
 * @classdesc IAffixProps
 */
export interface IAffixProps extends ICommonProps{
  // 距离窗口顶部达到指定偏移量后触发
  offsetTop?: number;
  // 距离窗口底部达到指定偏移量后触发
  offsetBottom?: number;
  // 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
  target?: targetType;
  // 固定状态改变时触发的回调函数
  onChange?: onChangeType;
  children: React.ReactElement;
}

/**
 * IAffixState
 * @class IAffixState
 * @classdesc IAffixState
 */
export interface IAffixState {
  // 是否上方固定
  isTopFixed?: boolean;
  // 是否下方固定
  isBottomFixed?: boolean;
}
