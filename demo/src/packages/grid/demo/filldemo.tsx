import React from 'react';

import { Row, Col } from '../index';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <fieldset>
              <legend>Percentage columns</legend>
              <Row>
                <Col flex={2}>2 / 5</Col>
                <Col flex={3}>3 / 5</Col>
              </Row>
            </fieldset>
    
            <fieldset>
              <legend>Fill rest</legend>
              <Row>
                <Col flex="100px">100px</Col>
                <Col flex="auto">Fill Rest</Col>
              </Row>
            </fieldset>
    
            <fieldset>
              <legend>Raw flex style</legend>
              <Row>
                <Col flex="1 1 200px">1 1 200px</Col>
                <Col flex="0 1 300px">0 1 300px</Col>
              </Row>
            </fieldset>
          </div>
        );
      }
    }
    
    export default Basedemo;
  `,
  title: 'Flex填充',
  description: 'Col 提供 flex 属性以支持填充。',
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
          <legend>Percentage columns</legend>
          <Row>
            <Col flex={2}>2 / 5</Col>
            <Col flex={3}>3 / 5</Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend>Fill rest</legend>
          <Row>
            <Col flex="100px">100px</Col>
            <Col flex="auto">Fill Rest</Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend>Raw flex style</legend>
          <Row>
            <Col flex="1 1 200px">1 1 200px</Col>
            <Col flex="0 1 300px">0 1 300px</Col>
          </Row>
        </fieldset>
      </div>
    );
  }
}

export default Basedemo;
