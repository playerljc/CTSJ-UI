import React from 'react';

import Affix from '../affix';
import ExamplePanel from "../../../components/examplepanel";

export const Config = {
  code : `
    class TargetDemo extends React.PureComponent {
      el: HTMLDivElement | null = null;
    
      render():React.ReactElement {
        return (
          <div className="Affix-Demo-TargetDemo" ref={(el) => (this.el = el)}>
            <div className="Affix-Demo-TargetDemo-Inner">
              <div style={{height: 100}}/>
              <Affix
                offsetTop={50}
                target={() => this.el || window}
              >
                <button>target Affix top</button>
              </Affix>
              <div style={{height: 600}}/>
              <Affix offsetBottom={50} target={() => this.el || window}>
                <button>target Affix bottom</button>
              </Affix>
            </div>
          </div>
        );
      }
    }
  `,
  title:"滚动容器",
  description:"用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window",
};

/**
 * TargetDemo
 * @class TargetDemo;
 * @classdesc TargetDemo
 */
class TargetDemo extends React.PureComponent {
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
      <div className="Affix-Demo-TargetDemo" ref={(el) => (this.el = el)}>
        <div className="Affix-Demo-TargetDemo-Inner">
          <div style={{height: 100}}/>
          <Affix
            offsetTop={50}
            target={() => this.el || window}
          >
            <button>target Affix top</button>
          </Affix>
          <div style={{height: 600}}/>
          <Affix offsetBottom={50} target={() => this.el || window}>
            <button>target Affix bottom</button>
          </Affix>
        </div>
      </div>
    );
  }
}

export default TargetDemo;
