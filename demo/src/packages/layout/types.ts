/* 组件typescript类型的定义 */
import { ICommonProps } from '../types';

export interface ILayoutProps extends ICommonProps {
  auto?: boolean;
}

export interface IContentProps extends ICommonProps {
  auto?: boolean;
}
