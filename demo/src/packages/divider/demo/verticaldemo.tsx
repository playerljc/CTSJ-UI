import React from 'react';

import Divider from '../divider';

export const Config = {
  code: `
    
  `,
  title: '垂直分割线',
  description: '使用 type="vertical" 设置为行内的垂直分割线。',
};

/**
 * Demo
 * @class Demo;
 * @classdesc Demo
 */
class Demo extends React.PureComponent {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <div>
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
      </div>
    );
  }
}

export default Demo;
