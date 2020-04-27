import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    
  `,
  title: '基础栅格',
  description: '从堆叠到水平排列。\n 使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。',
};

/**
 * BaseDemo
 * @class BaseDemo;
 * @classdesc BaseDemo
 */
class Basedemo extends React.PureComponent {
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
        <Row>
          <Col span={24}>Col</Col>
        </Row>
      </div>
    );
  }
}

export default Basedemo;
