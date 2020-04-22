/* 组件typescript类型的定义 */

export interface ICommonProps {
  // 内联样式
  style?: React.CSSProperties;
  // 样式表
  className?: string;
}

export interface ILayoutProps extends ICommonProps {
  auto?: boolean;
}

export interface IContentProps extends ICommonProps {
  auto?: boolean;
}
