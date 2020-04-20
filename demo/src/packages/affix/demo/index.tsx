import React from 'react';

import ExamplePanel from '../../../components/examplepanel';

import BaseDemo, { Config as BaseDemoConfig } from './basedemo';
import CallBackDemo, { Config as CallBackDemoConfig } from './callbackdemo';
import TargetDemo, { Config as TargetDemoConfig } from './targetdemo';

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
      <div
        className="AffixDemo"
        ref={(el) => {
          this.el = el;
        }}
      >
        <section>
          <h1>
            Affix<span className="subtitle">固钉</span>
          </h1>
          <section className="markdown">
            <p>将页面元素钉在可视范围。</p>
            <h2 id="何时使用" data-scrollama-index="0">
              <span>何时使用</span>
            </h2>
            <p>
              当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
            </p>
            <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
          </section>
        </section>

        <section className="markdown">
          <h2 data-scrollama-index="1">代码演示</h2>
          <ExamplePanel
            demo={<BaseDemo />}
            code={BaseDemoConfig.code}
            title={BaseDemoConfig.title}
            description={BaseDemoConfig.description}
          />
          <ExamplePanel
            demo={<CallBackDemo />}
            code={CallBackDemoConfig.code}
            title={CallBackDemoConfig.title}
            description={CallBackDemoConfig.description}
          />
          <ExamplePanel
            demo={<TargetDemo />}
            code={TargetDemoConfig.code}
            title={TargetDemoConfig.title}
            description={TargetDemoConfig.description}
          />
        </section>

        <section className="markdown api-container">
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
                <td>设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td>
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
      </div>
    );
  }
}

export default Demo;
