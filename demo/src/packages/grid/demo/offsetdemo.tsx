import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Row>
              <Col span={8}>col-8</Col>
              <Col span={8} offset={8}>
                col-8
              </Col>
            </Row>
            <Row>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
            </Row>
            <Row>
              <Col span={12} offset={6}>
                col-12 col-offset-6
              </Col>
            </Row>
          </div>
        );
      }
    }
    
    export default Basedemo;
  `,
  title: '左右偏移',
  description: (
    <>
      <p>列偏移</p>
      <p>
        使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。
      </p>
    </>
  ),
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
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
      </div>
    );
  }
}

export default Basedemo;
