import React from 'react';

import ExamplePanel from '../../../components/examplepanel';
import AnchorNav, { IEntry } from '../../../components/anchornav';

import BaseDemo, { Config as BaseDemoConfig } from './basedemo';
import GutterDemo, { Config as GutterDemoConfig } from './gutterdemo';
import OffsetDemo, { Config as OffsetDemoConfig } from './offsetdemo';
import FlexDemo, {Config as FlexDemoConfig} from './flexdemo';
import AlignDemo, {Config as AlignDemoConfig} from './aligndemo';
import OrderDemo, {Config as OrderDemoConfig} from './orderdemo';
import FillDemo, {Config as FillDemoConfig} from './filldemo';
import ConfigDemo,{Config as ConfigDemoConfig} from './configdemo';

import './index.less';

const AnchorData: IEntry[] = [
  {
    name: '基础栅格',
    anchor: 'base',
  },
  {
    name: '区块间隔',
    anchor: 'gutter',
  },
  {
    name: '左右偏移',
    anchor: 'offset',
  },
  {
    name: '排版',
    anchor: 'flex',
  },
  {
    name: '对齐',
    anchor: 'align',
  },
  {
    name: '排序',
    anchor: 'order',
  },
  {
    name: '填充',
    anchor: 'fill',
  },
  {
    name: '栅格配置',
    anchor: 'config',
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
        className="GridDemo"
        ref={(el) => {
          this.el = el;
        }}
      >
        <section>
          <h1>
            Grid<span className="subtitle">栅格</span>
          </h1>
          <section className="markdown">
            <p>
              布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理。
            </p>
            <ul>
              <li>通过 row 在水平方向建立一组 column（简写 col）</li>
              <li>你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素</li>
              <li>
                栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用
                &lt;Col span={8} /&gt; 来创建
              </li>
              <li>如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列</li>
            </ul>
            <p>
              我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 -
              居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用
              order 来定义元素的排列顺序。
            </p>
            <p>布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
          </section>
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
          <ExamplePanel
            id="gutter"
            demo={<GutterDemo />}
            code={GutterDemoConfig.code}
            title={GutterDemoConfig.title}
            description={GutterDemoConfig.description}
          />
          <ExamplePanel
            id="offset"
            demo={<OffsetDemo />}
            code={OffsetDemoConfig.code}
            title={OffsetDemoConfig.title}
            description={OffsetDemoConfig.description}
          />
          <ExamplePanel
            id="flex"
            demo={<FlexDemo />}
            code={FlexDemoConfig.code}
            title={FlexDemoConfig.title}
            description={FlexDemoConfig.description}
          />
          <ExamplePanel
            id="align"
            demo={<AlignDemo />}
            code={AlignDemoConfig.code}
            title={AlignDemoConfig.title}
            description={AlignDemoConfig.description}
          />
          <ExamplePanel
            id="order"
            demo={<OrderDemo />}
            code={OrderDemoConfig.code}
            title={OrderDemoConfig.title}
            description={OrderDemoConfig.description}
          />
          <ExamplePanel
            id="fill"
            demo={<FillDemo />}
            code={FillDemoConfig.code}
            title={FillDemoConfig.title}
            description={FillDemoConfig.description}
          />
          <ExamplePanel
            id="config"
            demo={<ConfigDemo />}
            code={ConfigDemoConfig.code}
            title={ConfigDemoConfig.title}
            description={ConfigDemoConfig.description}
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
                <td>offsetBottom</td>
                <td>距离窗口底部达到指定偏移量后触发</td>
                <td>number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>offsetTop</td>
                <td>距离窗口顶部达到指定偏移量后触发</td>
                <td>number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>target</td>
                <td>设置 Grid 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td>
                <td>() => HTMLElement</td>
                <td>() => window</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>固定状态改变时触发的回调函数</td>
                <td>Function(affixed)</td>
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
