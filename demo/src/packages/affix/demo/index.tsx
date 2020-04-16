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
      <div className="AffixDemo">
        <div style={{height:300}}>222</div>
        <Affix offsetTop={0}>
          <div>111</div>
        </Affix>
        <div style={{height:6600}}>333</div>
      </div>
    );
  }
}

export default Demo;
