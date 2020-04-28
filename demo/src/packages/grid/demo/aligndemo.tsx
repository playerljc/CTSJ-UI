import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <fieldset>
              <legend>Align Top</legend>
              <div style={style}>
                <Row justify="center" align="top">
                  <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                  </Col>
                </Row>
              </div>
            </fieldset>
    
            <fieldset>
              <legend>Align Middle</legend>
              <div style={style}>
                <Row justify="space-around" align="middle">
                  <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                  </Col>
                </Row>
              </div>
            </fieldset>
    
            <fieldset>
              <legend>Align Bottom</legend>
              <div style={style}>
                <Row justify="space-between" align="bottom">
                  <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                  </Col>
                  <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                  </Col>
                </Row>
              </div>
            </fieldset>
          </div>
        );
      }
    }
    
    export default Basedemo;
  `,
  title: '对齐',
  description: '子元素垂直对齐。',
};

const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

const style: React.CSSProperties = {
  margin: '15px 0',
  padding: '15px 0',
  backgroundColor: 'rgba(128, 128, 128, 0.08)',
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
        <fieldset>
          <legend>Align Top</legend>
          <div style={style}>
            <Row justify="center" align="top">
              <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
              </Col>
            </Row>
          </div>
        </fieldset>

        <fieldset>
          <legend>Align Middle</legend>
          <div style={style}>
            <Row justify="space-around" align="middle">
              <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
              </Col>
            </Row>
          </div>
        </fieldset>

        <fieldset>
          <legend>Align Bottom</legend>
          <div style={style}>
            <Row justify="space-between" align="bottom">
              <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
              </Col>
            </Row>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Basedemo;
