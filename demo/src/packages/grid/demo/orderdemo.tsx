import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Row>
              <Col span={6} order={4}>
                1 col-order-4
              </Col>
              <Col span={6} order={3}>
                2 col-order-3
              </Col>
              <Col span={6} order={2}>
                3 col-order-2
              </Col>
              <Col span={6} order={1}>
                4 col-order-1
              </Col>
            </Row>
          </div>
        );
      }
    }
    
    export default Basedemo;
  `,
  title: '排序',
  description: '通过Order来改变元素的排序。',
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
          <Col span={6} order={4}>
            1 col-order-4
          </Col>
          <Col span={6} order={3}>
            2 col-order-3
          </Col>
          <Col span={6} order={2}>
            3 col-order-2
          </Col>
          <Col span={6} order={1}>
            4 col-order-1
          </Col>
        </Row>
      </div>
    );
  }
}

export default Basedemo;
