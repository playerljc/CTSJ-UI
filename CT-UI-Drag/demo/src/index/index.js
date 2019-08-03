import React from 'react';
import ReactDOM from 'react-dom';
import DemoUtil from '@ctsj/ui-demo-util';
import Example from '@ctsj/ui-demo-util/lib/example';

import 'normalize.less';
import './index.less';

class Demo1 extends React.Component {
  componentDidMount() {

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
          />
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
    '',
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), dom1El);

DemoUtil.initial();
