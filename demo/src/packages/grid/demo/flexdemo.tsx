import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        const style: React.CSSProperties = {
          margin: '15px 0',
          padding: '15px 0',
          backgroundColor: 'rgba(128, 128, 128, 0.08)',
        };
    
        return (
          <div>
            <fieldset>
              <legend>sub-element align left</legend>
              <div style={style}>
                <Row justify="start">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>
              </div>
            </fieldset>
    
            <fieldset>
              <legend>sub-element align center</legend>
              <div style={style}>
                <Row justify="center">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>
              </div>
            </fieldset>
    
            <fieldset>
              <legend>sub-element align right</legend>
              <div style={style}>
                <Row justify="end">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>
              </div>
            </fieldset>
    
            <fieldset>
              <legend>sub-element monospaced arrangement</legend>
              <div style={style}>
                <Row justify="space-between">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>
              </div>
            </fieldset>
    
            <fieldset>
              <legend>sub-element align full</legend>
              <div style={style}>
                <Row justify="space-around">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>
              </div>
            </fieldset>
          </div>
        );
      }
    }
    
    export default Basedemo;
  `,
  title: '排版',
  description:
    '子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式',
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
    const style: React.CSSProperties = {
      margin: '15px 0',
      padding: '15px 0',
      backgroundColor: 'rgba(128, 128, 128, 0.08)',
    };

    return (
      <div>
        <fieldset>
          <legend>sub-element align left</legend>
          <div style={style}>
            <Row justify="start">
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
            </Row>
          </div>
        </fieldset>

        <fieldset>
          <legend>sub-element align center</legend>
          <div style={style}>
            <Row justify="center">
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
            </Row>
          </div>
        </fieldset>

        <fieldset>
          <legend>sub-element align right</legend>
          <div style={style}>
            <Row justify="end">
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
            </Row>
          </div>
        </fieldset>

        <fieldset>
          <legend>sub-element monospaced arrangement</legend>
          <div style={style}>
            <Row justify="space-between">
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
            </Row>
          </div>
        </fieldset>

        <fieldset>
          <legend>sub-element align full</legend>
          <div style={style}>
            <Row justify="space-around">
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
            </Row>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Basedemo;
