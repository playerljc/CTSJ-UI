import React from 'react';

import ExamplePanel from '../../../components/examplepanel';
import AnchorNav, { IEntry } from '../../../components/anchornav';
import BaseDemo, {Config as BaseDemoConfig} from './basedemo';

import './index.less';

const AnchorData: IEntry[] = [
  {
    name: '基本',
    anchor: 'base',
  },
  {
    name: 'API',
    anchor: 'api',
  },
];

/**
 * Demo
 * @class Demo
 * @classdesc Demo
 */
class Demo extends React.PureComponent {
  el: HTMLDivElement | null = null;

  constructor(props) {
    super(props);
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
      <div
        className="IconDemo"
        ref={(el) => {
          this.el = el;
        }}
      >
        <section>
          <h1>
            Icon<span className="subtitle">图标</span>
          </h1>
        </section>

        <section className="markdown">
          <h2 data-scrollama-index="1">代码演示</h2>
          <ExamplePanel
            id="base"
            demo={<BaseDemo />}
            code={BaseDemoConfig.code}
            title={BaseDemoConfig.title}
            description={BaseDemoConfig.description}
          />
        </section>

        <section className="markdown api-container" id="api">
          <h2 data-scrollama-index="1">API</h2>
          <table>
            <thead>
              <tr>
                <th>成员</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td>fortawesome的类型</td>
                <td>string</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </section>

        <AnchorNav data={AnchorData} />
      </div>
    );
  }
}

export default Demo;
