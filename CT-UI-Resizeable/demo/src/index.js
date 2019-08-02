import React from 'react';
import ReactDOM from 'react-dom';
import DemoUtil from '@ctsj/ui-demo-util';
import Example from '@ctsj/ui-demo-util/lib/example';
import ResizeableFactory from '@ctsj/ui-resizeable';

import 'normalize.less';
import './index.less';

class Demo extends React.Component {
  componentDidMount() {
    ResizeableFactory.create();
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
          <div className="ct-resizeable">
            <div className="ct-resizeable-item r1" />
            <div className="ct-resizeable-item r2" />
            <div className="ct-resizeable-item r3" />
          </div>

          <div className="ct-resizeable">
            <div className="ct-resizeable-item r1" />
            <div className="ct-resizeable-item r2" />
            <div className="ct-resizeable-item r3" />
          </div>

          <div className="ct-resizeable">
            <div className="ct-resizeable-item r1" />
            <div className="ct-resizeable-item r2" />
            <div className="ct-resizeable-item r3" />
          </div>
        </div>
      </div>
    );
  }
}
const domEl = document.getElementById('demo');
ReactDOM.render((
  <Example title="demo" introduction="demo">
    <div>
      <Demo />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html: `
import ResizeableFactory from '@ctsj/ui-resizeable';
import '@ctsj/ui-resizeable/resizeable.less';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ResizeableFactory.create();
  }

  render() {
    return (
      &lt;div className="normalDemo"&gt;
        &lt;div
          className="normalDemo-header"
          ref={(dom) =&gt; {
          this.hel = dom;
        }}
        /&gt;
        &lt;div
          className="normalDemo-content"
          ref={(dom) =&gt; {
          this.el = dom;
        }}
        &gt;
          &lt;div className="ct-resizeable"&gt;
            &lt;div className="ct-resizeable-item r1" /&gt;
            &lt;div className="ct-resizeable-item r2" /&gt;
            &lt;div className="ct-resizeable-item r3" /&gt;
          &lt;/div&gt;

          &lt;div className="ct-resizeable"&gt;
            &lt;div className="ct-resizeable-item r1" /&gt;
            &lt;div className="ct-resizeable-item r2" /&gt;
            &lt;div className="ct-resizeable-item r3" /&gt;
          &lt;/div&gt;

          &lt;div className="ct-resizeable"&gt;
            &lt;div className="ct-resizeable-item r1" /&gt;
            &lt;div className="ct-resizeable-item r2" /&gt;
            &lt;div className="ct-resizeable-item r3" /&gt;
          &lt;/div&gt;
          
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}
          `,
          }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl);

DemoUtil.initial();
