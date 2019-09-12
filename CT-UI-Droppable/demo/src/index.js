import React from 'react';
import ReactDOM from 'react-dom';
import DroppableFactory from '@ctsj/ui-droppable';
import DemoUtil from '@ctsj/ui-demo-util';
import { Dom6 } from '@ctmobile/ui-util';
import Example from '@ctsj/ui-demo-util/lib/example';

import 'normalize.less';
import './index.less';

let sourceHoverEl1;
let sourceHoverEl2;
let sourceHoverEl3;

class Demo1 extends React.Component {
  componentDidMount() {
    const droppable1 = DroppableFactory.create(this.dom, {
      // 可以放置
      onPutSuccess(params) {
        const cloneEl = params.cloneSourceEl;
        cloneEl.classList.remove('ct-droppable-source');

        const parentEl = Dom6.createElement('<li></li>');
        parentEl.appendChild(cloneEl);

        const { targetEls } = params;
        targetEls[0].appendChild(parentEl);
        droppable1.refresh();
        return true;
      },
      onSourceEnter(sourceEl) {
        sourceHoverEl1 = Dom6.createElement(
          '<div class="sourceMask"></div>'
        );
        const cloneNode = sourceEl.cloneNode(true);
        sourceHoverEl1.appendChild(cloneNode);
        sourceEl.parentElement.appendChild(sourceHoverEl1);
      },
      onSourceLeave() {
        if (sourceHoverEl1) {
          sourceHoverEl1.parentElement.removeChild(sourceHoverEl1);
          sourceHoverEl1 = null;
        }
      },

      // 拖动对象的附加样式，拖动移动起来后触发
      dragSourceExtendClasses: ['sourceActive'],
      // 可放置对象的附加样式，当拖动到可以放置的区域时触发
      dragTargetExtendClasses: ['targetActive'],

      // 拖动后原始节点是否显示
      isDragSourceDisplay: true,
      // 拖动之后原始节点是否存在
      isDragSourceExist: true,
      // 不可放置的时候松开是否有动画返回效果
      noDragReturnAnimate: true,
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div className="normalDemo-header" />
        <div
          className="normalDemo-content"
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <div
            className="drag-container"
            ref={(dom) => {
              this.dom = dom;
            }}
          >
            <ul className="drag-source-block">
              <li><span className="ct-droppable-source fa fa-qq" /></li>
              <li><span className="ct-droppable-source fa fa-git" /></li>
              <li><span className="ct-droppable-source fa fa-google" /></li>
              <li><span className="ct-droppable-source fa fa-android" /></li>
              <li><span className="ct-droppable-source fa fa-amazon" /></li>
              <li><span className="ct-droppable-source fa fa-linux" /></li>
            </ul>
            <ul className="drag-target-block ct-droppable-target" />
          </div>
        </div>
      </div>
    );
  }
}

const dom1El = document.getElementById('demo1');
ReactDOM.render((
  <Example title="A-B" introduction="A-B">
    <div>
      <Demo1 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
    __html:
    `
        const droppable1 = DroppableFactory.create(this.dom, {
        // 可以放置
        onPutSuccess(params) {
          const cloneEl = params.cloneSourceEl;
          cloneEl.classList.remove('ct-droppable-source');

          const parentEl = Dom6.createElement('&lt;li&gt;&lt;/li&gt;');
          parentEl.appendChild(cloneEl);

          const { targetEls } = params;
          targetEls[0].appendChild(parentEl);
          droppable1.refresh();
          return true;
        },
        onSourceEnter(sourceEl) {
          sourceHoverEl1 = Dom6.createElement(
            '&lt;div class="sourceMask"&gt;&lt;/div&gt;'
          );
          const cloneNode = sourceEl.cloneNode(true);
          sourceHoverEl1.appendChild(cloneNode);
          sourceEl.parentElement.appendChild(sourceHoverEl1);
        },
        onSourceLeave() {
          if (sourceHoverEl1) {
            sourceHoverEl1.parentElement.removeChild(sourceHoverEl1);
            sourceHoverEl1 = null;
          }
        },

        // 拖动对象的附加样式，拖动移动起来后触发
        dragSourceExtendClasses: ['sourceActive'],
        // 可放置对象的附加样式，当拖动到可以放置的区域时触发
        dragTargetExtendClasses: ['targetActive'],

        // 拖动后原始节点是否显示
        isDragSourceDisplay: true,
        // 拖动之后原始节点是否存在
        isDragSourceExist: true,
        // 不可放置的时候松开是否有动画返回效果
        noDragReturnAnimate: true,
      });
    `,
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), dom1El);


class Demo2 extends React.Component {
  componentDidMount() {
    const droppable2 = DroppableFactory.create(this.dom, {
      // 可以放置
      onPutSuccess(params) {
        params.sourceEl.parentElement.parentElement.removeChild(params.sourceEl.parentElement);
        const cloneEl = params.cloneSourceEl;
        cloneEl.classList.remove('ct-droppable-source');

        const parentEl = Dom6.createElement('<li></li>');
        parentEl.appendChild(cloneEl);

        const { targetEls } = params;
        targetEls[0].appendChild(parentEl);
        droppable2.refresh();
        return true;
      },
      onSourceEnter(sourceEl) {
        sourceHoverEl2 = Dom6.createElement(
          '<div class="sourceMask"></div>'
        );
        const cloneNode = sourceEl.cloneNode(true);
        sourceHoverEl2.appendChild(cloneNode);
        sourceEl.parentElement.appendChild(sourceHoverEl2);
      },
      onSourceLeave() {
        if (sourceHoverEl2) {
          sourceHoverEl2.parentElement.removeChild(sourceHoverEl2);
          sourceHoverEl2 = null;
        }
      },

      // 拖动对象的附加样式，拖动移动起来后触发
      dragSourceExtendClasses: ['sourceActive'],
      // 可放置对象的附加样式，当拖动到可以放置的区域时触发
      dragTargetExtendClasses: ['targetActive'],

      // 拖动后原始节点是否显示
      isDragSourceDisplay: true,
      // 拖动之后原始节点是否存在
      isDragSourceExist: false,
      // 不可放置的时候松开是否有动画返回效果
      noDragReturnAnimate: true,
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div className="normalDemo-header" />
        <div
          className="normalDemo-content"
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <div
            className="drag-container"
            ref={(dom) => {
            this.dom = dom;
          }}
          >
            <ul className="drag-source-block">
              <li><span className="ct-droppable-source fa fa-qq" /></li>
              <li><span className="ct-droppable-source fa fa-git" /></li>
              <li><span className="ct-droppable-source fa fa-google" /></li>
              <li><span className="ct-droppable-source fa fa-android" /></li>
              <li><span className="ct-droppable-source fa fa-amazon" /></li>
              <li><span className="ct-droppable-source fa fa-linux" /></li>
            </ul>
            <ul className="drag-target-block ct-droppable-target" />
          </div>
        </div>
      </div>
    );
  }
}

const dom2El = document.getElementById('demo2');
ReactDOM.render((
  <Example title="A-B 节点移走" introduction="A-B 节点移走">
    <div>
      <Demo2 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
    __html: `
      const droppable2 = DroppableFactory.create(this.dom, {
        // 可以放置
        onPutSuccess(params) {
          params.sourceEl.parentElement.parentElement.removeChild(params.sourceEl.parentElement);
          const cloneEl = params.cloneSourceEl;
          cloneEl.classList.remove('ct-droppable-source');

          const parentEl = Dom6.createElement('&lt;li&gt;&lt;/li&gt;');
          parentEl.appendChild(cloneEl);

          const { targetEls } = params;
          targetEls[0].appendChild(parentEl);
          droppable2.refresh();
          return true;
        },
        onSourceEnter(sourceEl) {
          sourceHoverEl2 = Dom6.createElement(
            '&lt;div class="sourceMask"&gt;&lt;/div&gt;'
          );
          const cloneNode = sourceEl.cloneNode(true);
          sourceHoverEl2.appendChild(cloneNode);
          sourceEl.parentElement.appendChild(sourceHoverEl2);
        },
        onSourceLeave() {
          if (sourceHoverEl2) {
            sourceHoverEl2.parentElement.removeChild(sourceHoverEl2);
            sourceHoverEl2 = null;
          }
        },

        // 拖动对象的附加样式，拖动移动起来后触发
        dragSourceExtendClasses: ['sourceActive'],
        // 可放置对象的附加样式，当拖动到可以放置的区域时触发
        dragTargetExtendClasses: ['targetActive'],

        // 拖动后原始节点是否显示
        isDragSourceDisplay: true,
        // 拖动之后原始节点是否存在
        isDragSourceExist: false,
        // 不可放置的时候松开是否有动画返回效果
        noDragReturnAnimate: true,
      });
    `,
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), dom2El);


class Demo3 extends React.Component {
  componentDidMount() {
    const droppable3 = DroppableFactory.create(this.dom, {
      // 可以放置,已经在ct-droppable-target中的ct-droppable-source不能拖放
      onPutSuccess(params) {
        const { targetEls, sourceEl } = params;
        const targetEl = targetEls[0];
        const index = Array.from(targetEl.querySelectorAll('.ct-droppable-source')).findIndex((el) => {
          return el === sourceEl;
        });

        if (index !== -1) {
          return false;
        } else {
          sourceEl.parentElement.parentElement.removeChild(sourceEl.parentElement);
          const cloneEl = params.cloneSourceEl;
          const parentEl = Dom6.createElement('<li></li>');
          parentEl.appendChild(cloneEl);
          targetEl.appendChild(parentEl);
          droppable3.refresh();
          return true;
        }
      },
      onSourceEnter(sourceEl) {
        sourceHoverEl3 = Dom6.createElement(
          '<div class="sourceMask"></div>'
        );
        const cloneNode = sourceEl.cloneNode(true);
        sourceHoverEl3.appendChild(cloneNode);
        sourceEl.parentElement.appendChild(sourceHoverEl3);
      },
      onSourceLeave() {
        if (sourceHoverEl3) {
          sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
          sourceHoverEl3 = null;
        }
      },

      // 拖动对象的附加样式，拖动移动起来后触发
      dragSourceExtendClasses: ['sourceActive'],
      // 可放置对象的附加样式，当拖动到可以放置的区域时触发
      dragTargetExtendClasses: ['targetActive'],

      // 拖动后原始节点是否显示
      isDragSourceDisplay: true,
      // 拖动之后原始节点是否存在
      isDragSourceExist: false,
      // 不可放置的时候松开是否有动画返回效果
      noDragReturnAnimate: true,
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div className="normalDemo-header" />
        <div
          className="normalDemo-content"
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <div
            className="drag-container"
            ref={(dom) => {
            this.dom = dom;
          }}
          >
            <ul className="drag-source-block ct-droppable-target">
              <li><span className="ct-droppable-source fa fa-qq" /></li>
              <li><span className="ct-droppable-source fa fa-git" /></li>
              <li><span className="ct-droppable-source fa fa-google" /></li>
              <li><span className="ct-droppable-source fa fa-android" /></li>
              <li><span className="ct-droppable-source fa fa-amazon" /></li>
              <li><span className="ct-droppable-source fa fa-linux" /></li>
            </ul>
            <ul className="drag-target-block ct-droppable-target" />
          </div>
        </div>
      </div>
    );
  }
}

const dom3El = document.getElementById('demo3');
ReactDOM.render((
  <Example title="A-B B-A A!=A B!=B" introduction="A-B B-A A!=A B!=B">
    <div>
      <Demo3 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
    __html: `
        const droppable3 = DroppableFactory.create(this.dom, {
          // 可以放置,已经在ct-droppable-target中的ct-droppable-source不能拖放
          onPutSuccess(params) {
            const { targetEls, sourceEl } = params;
            const targetEl = targetEls[0];
            const index = Array.from(targetEl.querySelectorAll('.ct-droppable-source')).findIndex((el) =&gt; {
              return el === sourceEl;
            });

            if (index !== -1) {
              return false;
            } else {
              sourceEl.parentElement.parentElement.removeChild(sourceEl.parentElement);
              const cloneEl = params.cloneSourceEl;
              const parentEl = Dom6.createElement('&lt;li&gt;&lt;/li&gt;');
              parentEl.appendChild(cloneEl);
              targetEl.appendChild(parentEl);
              droppable3.refresh();
              return true;
            }
          },
          onSourceEnter(sourceEl) {
            sourceHoverEl3 = Dom6.createElement(
              '&lt;div class="sourceMask"&gt;&lt;/div&gt;'
            );
            const cloneNode = sourceEl.cloneNode(true);
            sourceHoverEl3.appendChild(cloneNode);
            sourceEl.parentElement.appendChild(sourceHoverEl3);
          },
          onSourceLeave() {
            if (sourceHoverEl3) {
              sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
              sourceHoverEl3 = null;
            }
          },

          // 拖动对象的附加样式，拖动移动起来后触发
          dragSourceExtendClasses: ['sourceActive'],
          // 可放置对象的附加样式，当拖动到可以放置的区域时触发
          dragTargetExtendClasses: ['targetActive'],

          // 拖动后原始节点是否显示
          isDragSourceDisplay: true,
          // 拖动之后原始节点是否存在
          isDragSourceExist: false,
          // 不可放置的时候松开是否有动画返回效果
          noDragReturnAnimate: true,
        });
    `,
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), dom3El);


class Demo4 extends React.Component {
  componentDidMount() {
    const droppable4 = DroppableFactory.create(this.dom, {
      // 可以放置,已经在ct-droppable-target中的ct-droppable-source不能拖放
      onPutSuccess(params) {
        const { targetEls, sourceEl } = params;
        const targetEl = targetEls[targetEls.length - 1];

        sourceEl.parentElement.parentElement.removeChild(sourceEl.parentElement);
        const cloneEl = params.cloneSourceEl;
        const parentEl = Dom6.createElement('<li></li>');
        parentEl.appendChild(cloneEl);
        targetEl.appendChild(parentEl);
        droppable4.refresh();
        return true;
      },
      onSourceEnter(sourceEl) {
        sourceHoverEl3 = Dom6.createElement(
          '<div class="sourceMask"></div>'
        );
        const cloneNode = sourceEl.cloneNode(true);
        sourceHoverEl3.appendChild(cloneNode);
        sourceEl.parentElement.appendChild(sourceHoverEl3);
      },
      onSourceLeave() {
        if (sourceHoverEl3) {
          sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
          sourceHoverEl3 = null;
        }
      },

      // 拖动对象的附加样式，拖动移动起来后触发
      dragSourceExtendClasses: ['sourceActive'],
      // 可放置对象的附加样式，当拖动到可以放置的区域时触发
      dragTargetExtendClasses: ['targetActive'],

      // 拖动后原始节点是否显示
      isDragSourceDisplay: true,
      // 拖动之后原始节点是否存在
      isDragSourceExist: false,
      // 不可放置的时候松开是否有动画返回效果
      noDragReturnAnimate: true,
      inclusionRelation: false,
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div className="normalDemo-header" />
        <div
          className="normalDemo-content"
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <div
            className="drag-container"
            ref={(dom) => {
            this.dom = dom;
          }}
          >
            <ul className="drag-source-block ct-droppable-target">
              <li><span className="ct-droppable-source fa fa-qq" /></li>
              <li><span className="ct-droppable-source fa fa-git" /></li>
              <li><span className="ct-droppable-source fa fa-google" /></li>
              <li><span className="ct-droppable-source fa fa-android" /></li>
              <li><span className="ct-droppable-source fa fa-amazon" /></li>
              <li><span className="ct-droppable-source fa fa-linux" /></li>
            </ul>
            <ul className="drag-target-block ct-droppable-target">
              <div
                className="ct-droppable-target"
                style={{ margin: '5px', border: '1px solid #ccc', height: '100%', boxSizing: 'border-box' }}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const dom4El = document.getElementById('demo4');
ReactDOM.render((
  <Example title="含有包含关系的用inclusionRelation属性控制" introduction="含有包含关系的用inclusionRelation属性控制">
    <div>
      <Demo4 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
    __html: `
      const droppable4 = DroppableFactory.create(this.dom, {
        // 可以放置,已经在ct-droppable-target中的ct-droppable-source不能拖放
        onPutSuccess(params) {
          const { targetEls, sourceEl } = params;
          const targetEl = targetEls[targetEls.length - 1];

          sourceEl.parentElement.parentElement.removeChild(sourceEl.parentElement);
          const cloneEl = params.cloneSourceEl;
          const parentEl = Dom6.createElement('&lt;li&gt;&lt;/li&gt;');
          parentEl.appendChild(cloneEl);
          targetEl.appendChild(parentEl);
          droppable4.refresh();
          return true;
        },
        onSourceEnter(sourceEl) {
          sourceHoverEl3 = Dom6.createElement(
            '&lt;div class="sourceMask"&gt;&lt;/div&gt;'
          );
          const cloneNode = sourceEl.cloneNode(true);
          sourceHoverEl3.appendChild(cloneNode);
          sourceEl.parentElement.appendChild(sourceHoverEl3);
        },
        onSourceLeave() {
          if (sourceHoverEl3) {
            sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
            sourceHoverEl3 = null;
          }
        },

        // 拖动对象的附加样式，拖动移动起来后触发
        dragSourceExtendClasses: ['sourceActive'],
        // 可放置对象的附加样式，当拖动到可以放置的区域时触发
        dragTargetExtendClasses: ['targetActive'],

        // 拖动后原始节点是否显示
        isDragSourceDisplay: true,
        // 拖动之后原始节点是否存在
        isDragSourceExist: false,
        // 不可放置的时候松开是否有动画返回效果
        noDragReturnAnimate: true,
        inclusionRelation: false,
      });
    `,
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), dom4El);


class Demo5 extends React.Component {
  componentDidMount() {
    const droppable5 = DroppableFactory.create(this.dom, {
      /**
       * 放置在可滚动的元素内
       * @param params
       * @return {boolean}
       */
      onPutSuccess: (params) => {
        const demo5InnerEl = this.demo5Inner;
        params.naturalRelease.fn.call(
          params.naturalRelease.context,
          demo5InnerEl,
          params.cloneSourceEl
        );
        droppable5.refresh();
        return true;
      },
      onSourceEnter(sourceEl) {
        sourceHoverEl3 = Dom6.createElement(
          '<div class="sourceMask"></div>'
        );
        const cloneNode = sourceEl.cloneNode(true);
        sourceHoverEl3.appendChild(cloneNode);
        sourceEl.parentElement.appendChild(sourceHoverEl3);
      },
      onSourceLeave() {
        if (sourceHoverEl3) {
          sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
          sourceHoverEl3 = null;
        }
      },
      /**
       * 触碰边缘的时候触发,并且滚动
       * @param top
       * @param bottom
       * @param left
       * @param right
       */
      onBoundaryDetection: (condition, scroll) => {
        const demo5ScrollEl = this.demo5Scroll;
        scroll(condition, demo5ScrollEl);
      },
      // 拖动对象的附加样式，拖动移动起来后触发
      dragSourceExtendClasses: ['sourceActive'],
      // 可放置对象的附加样式，当拖动到可以放置的区域时触发
      dragTargetExtendClasses: ['targetActive'],

      // 拖动后原始节点是否显示
      isDragSourceDisplay: true,
      // 拖动之后原始节点是否存在
      isDragSourceExist: true,
      // 不可放置的时候松开是否有动画返回效果
      noDragReturnAnimate: true,
      inclusionRelation: false,
      infinite: true,
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div className="normalDemo-header" />
        <div
          className="normalDemo-content"
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <div
            className="drag-container"
            style={{ height: '200px' }}
            ref={(dom) => {
            this.dom = dom;
          }}
          >
            <ul className="drag-source-block">
              <li><span className="ct-droppable-source fa fa-qq" /></li>
            </ul>
            <ul
              className="drag-target-block ct-droppable-target"
              ref={(dom) => {
              this.demo5Scroll = dom;
            }}
              style={{ overflow: 'auto' }}
            >
              <div
                style={{ width: '900px', height: '900px', position: 'relative' }}
                ref={(dom) => {
                  this.demo5Inner = dom;
                }}
                className="ct-droppable-target"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const dom5El = document.getElementById('demo5');
ReactDOM.render((
  <Example title="无限滚动" introduction="无限滚动">
    <div>
      <Demo5 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
    __html: `
      const droppable5 = DroppableFactory.create(this.dom, {
        /**
         * 放置在可滚动的元素内
         * @param params
         * @return {boolean}
         */
        onPutSuccess: (params) =&gt; {
          const demo5InnerEl = this.demo5Inner;
          params.naturalRelease.fn.call(
            params.naturalRelease.context,
            demo5InnerEl,
            params.cloneSourceEl
          );
          droppable5.refresh();
          return true;
        },
        onSourceEnter(sourceEl) {
          sourceHoverEl3 = Dom6.createElement(
            '&lt;div class="sourceMask"&gt;&lt;/div&gt;'
          );
          const cloneNode = sourceEl.cloneNode(true);
          sourceHoverEl3.appendChild(cloneNode);
          sourceEl.parentElement.appendChild(sourceHoverEl3);
        },
        onSourceLeave() {
          if (sourceHoverEl3) {
            sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
            sourceHoverEl3 = null;
          }
        },
        /**
         * 触碰边缘的时候触发,并且滚动
         * @param top
         * @param bottom
         * @param left
         * @param right
         */
        onBoundaryDetection: (condition, scroll) =&gt; {
          const demo5ScrollEl = this.demo5Scroll;
          scroll(condition, demo5ScrollEl);
        },
        // 拖动对象的附加样式，拖动移动起来后触发
        dragSourceExtendClasses: ['sourceActive'],
        // 可放置对象的附加样式，当拖动到可以放置的区域时触发
        dragTargetExtendClasses: ['targetActive'],

        // 拖动后原始节点是否显示
        isDragSourceDisplay: true,
        // 拖动之后原始节点是否存在
        isDragSourceExist: true,
        // 不可放置的时候松开是否有动画返回效果
        noDragReturnAnimate: true,
        inclusionRelation: false,
        infinite: true,
      });
    `,
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), dom5El);


DemoUtil.initial();
