import React from 'react';

import Affix from '../affix';

export const Config = {
  code: `
    class BaseDemo extends React.PureComponent {
      render(): React.ReactElement {
        return (
          <div style={{ position: 'relative' }}>
            <Affix offsetTop={50}>
              <button>Affix top</button>
            </Affix>
            <Affix offsetBottom={50}>
              <button>Affix bottom</button>
            </Affix>
          </div>
        );
      }
  }
`,
  title: '基本',
  description: '最简单的用法。',
};

/**
 * BaseDemo
 * @class BaseDemo;
 * @classdesc BaseDemo
 */
class BaseDemo extends React.PureComponent {
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
        <Affix offsetTop={50}>
          <button>Affix top</button>
        </Affix>
        <Affix offsetBottom={50}>
          <button>Affix bottom</button>
        </Affix>
      </div>
    );
  }
}

export default BaseDemo;
