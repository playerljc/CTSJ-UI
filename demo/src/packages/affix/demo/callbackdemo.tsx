import React from 'react';

import Affix from '../affix';
import ExamplePanel from '../../../components/examplepanel';

export const Config = {
  code: `
    class CallBackDemo extends React.PureComponent<any, any> {
      btnEl: HTMLButtonElement | null = null;
    
      constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
      }
    
      onChange(value: number): void {
        (this.btnEl as HTMLButtonElement).innerText = \`$\{value\}px to affix top\`;
      }
    
      render(): React.ReactElement {
        return (
          <div style={{ position: 'relative' }}>
            <Affix offsetTop={50} onChange={this.onChange}>
              <button ref={(el) => (this.btnEl = el)}>0px to affix top</button>
            </Affix>
          </div>
        );
      }
    }
  `,
  title: '固定状态改变的回调',
  description: '可以获得固定的状态',
};

/**
 * CallBackDemo
 * @class CallBackDemo;
 * @classdesc CallBackDemo
 */
class CallBackDemo extends React.PureComponent<any, any> {
  btnEl: HTMLButtonElement | null = null;

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value: number): void {
    (this.btnEl as HTMLButtonElement).innerText = `${value}px to affix top`;
  }

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
      <div style={{ position: 'relative' }}>
        <Affix offsetTop={50} onChange={this.onChange}>
          <button ref={(el) => (this.btnEl = el)}>0px to affix top</button>
        </Affix>
      </div>
    );
  }
}

export default CallBackDemo;
