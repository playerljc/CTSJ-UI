import React from 'react';

import ExamplePanel from '../../../components/examplepanel';
import AnchorNav, { IEntry } from '../../../components/anchornav';

import HorizontalDemo, { Config as HorizontalDemoConfig } from './horizontaldemo';
import TextDemo, { Config as TextDemoConfig } from './textdemo';
import TextNormalDemo, { Config as TextNormalDemoConfig } from './textnormaldemo';
import VerticalDemo, { Config as VerticalDemoConfig } from './verticaldemo';

import './index.less';

const AnchorData: IEntry[] = [
  {
    name: '水平分割线',
    anchor: 'horizontal',
  },
  {
    name: '带文字的分割线',
    anchor: 'text',
  },
  {
    name: '分割文字使用正文样式',
    anchor: 'textnormal',
  },
  {
    name: '垂直分割线',
    anchor: 'vertical',
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
        className="AffixDemo"
        ref={(el) => {
          this.el = el;
        }}
      >
        <section>
          <h1>
            Divider<span className="subtitle">分割线</span>
          </h1>
          <section className="markdown">
            <p>区隔内容的分割线。</p>
            <h2 id="何时使用" data-scrollama-index="0">
              <span>何时使用</span>
            </h2>
            <ul>
              <li>对不同章节的文本段落进行分割。</li>
              <li>对行内文字/链接进行分割，例如表格的操作列。</li>
            </ul>
          </section>
        </section>

        <section className="markdown">
          <h2 data-scrollama-index="1">代码演示</h2>
          <ExamplePanel
            id="horizontal"
            demo={<HorizontalDemo />}
            code={HorizontalDemoConfig.code}
            title={HorizontalDemoConfig.title}
            description={HorizontalDemoConfig.description}
          />
          <ExamplePanel
            id="text"
            demo={<TextDemo />}
            code={TextDemoConfig.code}
            title={TextDemoConfig.title}
            description={TextDemoConfig.description}
          />
          <ExamplePanel
            id="textnormal"
            demo={<TextNormalDemo />}
            code={TextNormalDemoConfig.code}
            title={TextNormalDemoConfig.title}
            description={TextNormalDemoConfig.description}
          />
          <ExamplePanel
            id="vertical"
            demo={<VerticalDemo />}
            code={VerticalDemoConfig.code}
            title={VerticalDemoConfig.title}
            description={VerticalDemoConfig.description}
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
                <td>className</td>
                <td>分割线样式类</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>dashed</td>
                <td>是否虚线</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>orientation</td>
                <td>分割线标题的位置</td>
                <td>left | right | center</td>
                <td>center</td>
              </tr>
              <tr>
                <td>style</td>
                <td>分割线样式对象</td>
                <td>CSSProperties</td>
                <td>-</td>
              </tr>
              <tr>
                <td>type</td>
                <td>水平还是垂直类型</td>
                <td>horizontal | vertical</td>
                <td>horizontal</td>
              </tr>
              <tr>
                <td>plain</td>
                <td>文字是否显示为普通正文样式</td>
                <td>boolean</td>
                <td>false</td>
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
