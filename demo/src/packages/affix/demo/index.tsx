import React from 'react';

import Affix from '../index';

import './index.less';

/**
 * Demo
 * @class Demo
 * @classdesc Demo
 */
class Demo extends React.PureComponent {
  el: HTMLDivElement | null = null;
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
      <div className="AffixDemo" ref={(el) => {
        this.el = el;
      }}>
        <div style={{ height: 1500 }}>222</div>
        <Affix offsetTop={50} target={() => this.el || window}>
          <div>111</div>
        </Affix>
        <div style={{ height: 1500 }}>333</div>
      </div>
    );
  }
}

export default Demo;
