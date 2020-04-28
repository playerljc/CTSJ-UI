import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
    
        return (
          <div>
            <fieldset>
              <legend>Horizontal</legend>
              <Row gutter={16}>
                <Col span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                  <div style={style}>col-6</div>
                </Col>
              </Row>
            </fieldset>
    
            <fieldset>
              <legend>Vertical</legend>
              <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
              </Row>
            </fieldset>
          </div>
        );
      }
    }
    
    export default Basedemo;
  `,
  title: '区块间隔',
  description: (
    <>
      <p>
        栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px
        作为栅格间隔。(n 是自然数)
      </p>
      <p>如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]</p>
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
    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

    return (
      <div>
        <fieldset>
          <legend>Horizontal</legend>
          <Row gutter={16}>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend>Vertical</legend>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>
        </fieldset>
      </div>
    );
  }
}

export default Basedemo;
