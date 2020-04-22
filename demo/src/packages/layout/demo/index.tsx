import React from 'react';

import ExamplePanel from '../../../components/examplepanel';
import AnchorNav, { IEntry } from '../../../components/anchornav';

import HcfDemo, { Config as HcfDemoConfig } from './hcfdemo';
import HcflDemo, { Config as HcflDemoConfig } from './hcfldemo';
import HcfrDemo, { Config as HcfrDemoConfig } from './hcfrdemo';
import HcfbDemo, { Config as HcfbDemoConfig } from './hcfbdemo';
import LrrDemo, { Config as LrrDemoConfig } from './lrrdemo';
import LrlDemo, { Config as LrlDemoConfig } from './lrldemo';
import LcrcDemo, { Config as LcrcDemoConfig } from './lcrcdemo';
import TcbcautoDemo, { Config as TcbcautoDemoConfig } from './tcbcautodemo';
import TclrautoDemo, { Config as TclrautoDemoConfig } from './tclrautodemo';

import './index.less';

const AnchorData: IEntry[] = [
  {
    name: '上中下布局',
    anchor: 'hcf',
  },
  {
    name: '上中下-左边侧栏',
    anchor: 'hcfl',
  },
  {
    name: '上中下-右边侧栏',
    anchor: 'hcfr',
  },
  {
    name: '上中下-两边侧栏',
    anchor: 'hcfb',
  },
  {
    name: '左右-右侧上中下',
    anchor: 'lrr',
  },
  {
    name: '左右-左侧上中下',
    anchor: 'lrl',
  },
  {
    name: '左中右-中间上中下',
    anchor: 'lcrc',
  },
  {
    name: '上中下-固定上下中间自适应',
    anchor: 'tcbcauto',
  },
  {
    name: '上中-左侧边栏右侧自适应',
    anchor: 'tclrauto',
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
        className="LayoutDemo"
        ref={(el) => {
          this.el = el;
        }}
      >
        <section>
          <h1>
            Layout<span className="subtitle">布局</span>
          </h1>
          <section className="markdown">
            <p>协助进行页面级整体布局。</p>
            <h2>
              <span>组件概述</span>
            </h2>
            <ul>
              <li>
                <p>Layout: 布局容器，其下可嵌套 Header Footer Layout Content</p>
              </li>
              <li>
                <p>Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中</p>
              </li>
              <li>
                <p>Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中</p>
              </li>
              <li>
                <p>Content: 内容部分, 其下可以嵌套 Sider Layout Content</p>
              </li>
              <li>
                <p>Sider: 侧栏 自带默认样式及基本功能，其下可嵌套任何元素 只能放在Content中</p>
              </li>
            </ul>
          </section>
        </section>

        <section className="markdown">
          <h2 data-scrollama-index="1">代码演示</h2>
          <ExamplePanel
            id="hcf"
            demo={<HcfDemo />}
            code={HcfDemoConfig.code}
            title={HcfDemoConfig.title}
            description={HcfDemoConfig.description}
          />
          <ExamplePanel
            id="hcfl"
            demo={<HcflDemo />}
            code={HcflDemoConfig.code}
            title={HcflDemoConfig.title}
            description={HcflDemoConfig.description}
          />
          <ExamplePanel
            id="hcfr"
            demo={<HcfrDemo />}
            code={HcfrDemoConfig.code}
            title={HcfrDemoConfig.title}
            description={HcfrDemoConfig.description}
          />
          <ExamplePanel
            id="hcfb"
            demo={<HcfbDemo />}
            code={HcfbDemoConfig.code}
            title={HcfbDemoConfig.title}
            description={HcfbDemoConfig.description}
          />
          <ExamplePanel
            id="lrr"
            demo={<LrrDemo />}
            code={LrrDemoConfig.code}
            title={LrrDemoConfig.title}
            description={LrrDemoConfig.description}
          />
          <ExamplePanel
            id="lrl"
            demo={<LrlDemo />}
            code={LrlDemoConfig.code}
            title={LrlDemoConfig.title}
            description={LrlDemoConfig.description}
          />
          <ExamplePanel
            id="lcrc"
            demo={<LcrcDemo />}
            code={LcrcDemoConfig.code}
            title={LcrcDemoConfig.title}
            description={LcrcDemoConfig.description}
          />
          <ExamplePanel
            id="tcbcauto"
            demo={<TcbcautoDemo />}
            code={TcbcautoDemoConfig.code}
            title={TcbcautoDemoConfig.title}
            description={TcbcautoDemoConfig.description}
          />
          <ExamplePanel
            id="tclrauto"
            demo={<TclrautoDemo />}
            code={TclrautoDemoConfig.code}
            title={TclrautoDemoConfig.title}
            description={TclrautoDemoConfig.description}
          />
        </section>

        <div id="api">
          <section className="markdown api-container">
            <h2>Layout</h2>
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
                  <td>样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>内联样式</td>
                  <td>CSSProperties</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>auto</td>
                  <td>是否自适应</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>...other</td>
                  <td>其他的Dom元素属性</td>
                  <td>Object</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="markdown api-container">
            <h2>Header</h2>
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
                  <td>样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>内联样式</td>
                  <td>CSSProperties</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>...other</td>
                  <td>其他的Dom元素属性</td>
                  <td>Object</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="markdown api-container">
            <h2>Footer</h2>
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
                  <td>样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>内联样式</td>
                  <td>CSSProperties</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>...other</td>
                  <td>其他的Dom元素属性</td>
                  <td>Object</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="markdown api-container">
            <h2>Content</h2>
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
                  <td>样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>内联样式</td>
                  <td>CSSProperties</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>auto</td>
                  <td>是否自适应</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>...other</td>
                  <td>其他的Dom元素属性</td>
                  <td>Object</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="markdown api-container">
            <h2>Sider</h2>
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
                  <td>样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>内联样式</td>
                  <td>CSSProperties</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>...other</td>
                  <td>其他的Dom元素属性</td>
                  <td>Object</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <AnchorNav data={AnchorData} />
      </div>
    );
  }
}

export default Demo;
