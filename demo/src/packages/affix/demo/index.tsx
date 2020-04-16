import React from 'react';

import Affix from '../index';

import './index.less';

/**
 * Demo
 * @class Demo
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
        <Affix>
          <div>111</div>
        </Affix>
      </div>
    );
  }
}

export default Demo;
