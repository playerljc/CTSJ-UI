import React from 'react';

import Divider from '../divider';

export const Config = {
  code: `
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider plain>Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="left" plain>
              Left Text
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="right" plain>
              Right Text
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
          </div>
        );
      }
    }
    
    export default Demo;
  `,
  title: '分割文字使用正文样式',
  description: '使用 plain 可以设置为更轻量的分割文字样式。',
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider plain>Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="left" plain>
          Left Text
        </Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="right" plain>
          Right Text
        </Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
      </div>
    );
  }
}

export default Demo;
