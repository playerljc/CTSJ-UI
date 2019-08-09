import React from 'react';
import ReactDOM from 'react-dom';
import SplitFactory from '@ctsj/ui-split';
import DemoUtil from '@ctsj/ui-demo-util';
import Example from '@ctsj/ui-demo-util/lib/example';

import 'normalize.less';
// import '@ctsj/ui-split/split.less';
import './index.less';

class Demo1 extends React.Component {
  componentDidMount() {
    SplitFactory.create(this.dom, {
      direction: 'horizontal',
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
            className="ct-split"
            ref={(dom) => {
            this.dom = dom;
          }}
          >
            <div className="ct-split-main" />
            <div className="ct-split-left" />
            <div className="ct-split-right" />
          </div>
        </div>
      </div>
    );
  }
}
const domEl1 = document.getElementById('demo1');
ReactDOM.render((
  <Example title="horizontal" introduction="horizontal">
    <div>
      <Demo1 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html:
              `
    SplitFactory.create(this.dom, {
      direction: 'horizontal',
    });
    `,
          }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl1);


class Demo2 extends React.Component {
  componentDidMount() {
    SplitFactory.create(this.dom, {
      direction: 'vertical',
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
            className="ct-split"
            ref={(dom) => {
            this.dom = dom;
          }}
          >
            <div className="ct-split-main" />
            <div className="ct-split-top" />
            <div className="ct-split-bottom" />
          </div>
        </div>
      </div>
    );
  }
}
const domEl2 = document.getElementById('demo2');
ReactDOM.render((
  <Example title="vertical" introduction="vertical">
    <div>
      <Demo2 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html:
              `
    SplitFactory.create(this.dom, {
      direction: 'vertical',
    });
    `,
          }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl2);


class Demo3 extends React.Component {
  componentDidMount() {
    SplitFactory.create(this.mainDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.subDom, {
      direction: 'horizontal',
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
            className="ct-split"
            ref={(dom) => {
            this.mainDom = dom;
          }}
          >
            <div className="ct-split-main">
              <div
                className="ct-split"
                ref={(dom) => {
                this.subDom = dom;
              }}
              >
                <div className="ct-split-main" />
                <div className="ct-split-left" />
                <div className="ct-split-right" />
              </div>
            </div>
            <div className="ct-split-top" />
            <div className="ct-split-bottom" />
          </div>
        </div>
      </div>
    );
  }
}
const domEl3 = document.getElementById('demo3');
ReactDOM.render((
  <Example title="cascade1" introduction="cascade1">
    <div>
      <Demo3 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html:
              `
    SplitFactory.create(this.mainDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.subDom, {
      direction: 'horizontal',
    });
    `,
          }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl3);


class Demo4 extends React.Component {
  componentDidMount() {
    SplitFactory.create(this.mainDom, {
      direction: 'horizontal',
    });

    SplitFactory.create(this.subDom, {
      direction: 'vertical',
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
            className="ct-split"
            ref={(dom) => {
            this.mainDom = dom;
          }}
          >
            <div className="ct-split-main">
              <div
                className="ct-split"
                ref={(dom) => {
                this.subDom = dom;
              }}
              >
                <div className="ct-split-main" />
                <div className="ct-split-top" />
                <div className="ct-split-bottom" />
              </div>
            </div>
            <div className="ct-split-left" />
            <div className="ct-split-right" />
          </div>
        </div>
      </div>
    );
  }
}
const domEl4 = document.getElementById('demo4');
ReactDOM.render((
  <Example title="cascade2" introduction="cascade2">
    <div>
      <Demo4 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html:
              `
    SplitFactory.create(this.mainDom, {
      direction: 'horizontal',
    });

    SplitFactory.create(this.subDom, {
      direction: 'vertical',
    });
    `,
          }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl4);


class Demo5 extends React.Component {
  componentDidMount() {
    SplitFactory.create(this.mainDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.subDom, {
      direction: 'horizontal',
    });

    SplitFactory.create(this.leftDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.rightDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.topDom, {
      direction: 'horizontal',
    });

    SplitFactory.create(this.bottomDom, {
      direction: 'horizontal',
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
            className="ct-split"
            ref={(dom) => {
            this.mainDom = dom;
          }}
          >
            <div className="ct-split-main">

              <div
                className="ct-split"
                ref={(dom) => {
                this.subDom = dom;
              }}
              >
                <div className="ct-split-main" />
                <div className="ct-split-left">
                  <div className="ct-split" ref={(dom) => { this.leftDom = dom; }}>
                    <div className="ct-split-main" />
                    <div className="ct-split-top" />
                    <div className="ct-split-bottom" />
                  </div>
                </div>
                <div className="ct-split-right">
                  <div className="ct-split" ref={(dom) => { this.rightDom = dom; }}>
                    <div className="ct-split-main" />
                    <div className="ct-split-top" />
                    <div className="ct-split-bottom" />
                  </div>
                </div>
              </div>

            </div>

            <div className="ct-split-top">
              <div className="ct-split" ref={(dom) => { this.topDom = dom; }}>
                <div className="ct-split-main" />
                <div className="ct-split-left" />
                <div className="ct-split-right" />
              </div>
            </div>

            <div className="ct-split-bottom">
              <div className="ct-split" ref={(dom) => { this.bottomDom = dom; }}>
                <div className="ct-split-main" />
                <div className="ct-split-left" />
                <div className="ct-split-right" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
const domEl5 = document.getElementById('demo5');
ReactDOM.render((
  <Example title="cascadeAdvanced" introduction="cascadeAdvanced">
    <div>
      <Demo5 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html:
              `
    SplitFactory.create(this.mainDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.subDom, {
      direction: 'horizontal',
    });

    SplitFactory.create(this.leftDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.rightDom, {
      direction: 'vertical',
    });

    SplitFactory.create(this.topDom, {
      direction: 'horizontal',
    });

    SplitFactory.create(this.bottomDom, {
      direction: 'horizontal',
    });
    `,
          }}
          />
        </code>
      </pre>
    </div>
  </Example>
), domEl5);

DemoUtil.initial();
