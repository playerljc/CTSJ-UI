import React from 'react';
import ReactDOM from 'react-dom';
// import DragFactory from '@ctsj/ui-drag/drag';
import DragFactory from '@ctsj/ui-drag';
import DemoUtil from '@ctsj/ui-demo-util';
import Example from '@ctsj/ui-demo-util/lib/example';

import 'normalize.less';
import './index.less';
// import '@ctsj/ui-drag/drag.less';

class Demo extends React.Component {
  componentDidMount() {
    DragFactory.create(this.dom, {
      mode: 'clone',
      cloneClasses: ['cloneNode'],
      showMap: true,
      moveStep: 10,
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
            className="ct-drag"
            ref={(dom) => {
              this.dom = dom;
            }}
          >
            <div className="ct-drag-item d1">drag1</div>
            <div className="ct-drag-item d2">drag2</div>
          </div>
        </div>
      </div>
    );
  }
}

const domEl = document.getElementById('demo');
ReactDOM.render((
  <Example title="Drag" introduction="Drag">
    <div>
      <Demo />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
    __html:
    `
    DragFactory.create(this.dom, {
      mode: 'clone',
      cloneClasses: ['cloneNode'],
      showMap: true,
      moveStep: 10,
    });
    `,
  }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl);

DemoUtil.initial();
