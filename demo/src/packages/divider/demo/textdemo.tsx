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
            <Divider>Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="left">Left Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="right">Right Text</Divider>
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
  title: '带文字的分割线',
  description: '分割线中带有文字，可以用 orientation 指定文字位置。',
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
        <Divider>Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="left">Left Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="right">Right Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
          ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
      </div>
    );
  }
}

export default Demo;
