import React from 'react';
import ReactDOM from 'react-dom';
import DemoUtil from '@ctsj/ui-demo-util';
import Example from '@ctsj/ui-demo-util/lib/example';
// import SelectableFactory from '@ctsj/ui-selectable/selectable';
import SelectableFactory from '@ctsj/ui-selectable';
// import '@ctsj/ui-selectable/selectable.less';
import 'normalize.less';
import './index.less';

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SelectableFactory.create(this.el, {
      moveInclude: (els) => {
        els.map((el) => {
          el.classList.add('active');
        });
      },
      moveExclude: (els) => {
        els.map((el) => {
          el.classList.remove('active');
        });
      },
      upInclude: (els) => {
        const str = [];
        els.map((el) => {
          str.push(el.innerText);
        });

        this.hel.innerHTML = str.join('#');
      },
      rangeClasses: ['demoSelect'],
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div
          className="normalDemo-header"
          ref={(dom) => {
            this.hel = dom;
          }}
        />
        <div
          className="normalDemo-content"
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <ul className="normalDemo-ul">
            <li className="ct-selectable-item">item1</li>
            <li className="ct-selectable-item">item2</li>
            <li className="ct-selectable-item">item3</li>
            <li className="ct-selectable-item">item4</li>
            <li className="ct-selectable-item">item5</li>
            <li className="ct-selectable-item">item6</li>
          </ul>
        </div>
      </div>
    );
  }
}

const dom1El = document.getElementById('demo1');
ReactDOM.render((
  <Example title="demo1" introduction="demo1">
    <div>
      <Demo1 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html: `
import SelectableFactory from '@ctsj/ui-selectable';
import '@ctsj/ui-selectable/selectable.less';

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SelectableFactory.create(this.el, {
      moveInclude: (els) =&gt; {
        els.map((el) =&gt; {
          el.classList.add('active');
        });
      },
      moveExclude: (els) =&gt; {
        els.map((el) =&gt; {
          el.classList.remove('active');
        });
      },
      upInclude: (els) =&gt; {
        const str = [];
        els.map((el) =&gt; {
          str.push(el.innerText);
        });

        this.hel.innerHTML = str.join('#');
      },
      rangeClasses: ['demo1Select'],
    });
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
          &lt;ul className="normalDemo-ul"&gt;
            &lt;li className="ct-selectable-item"&gt;item1&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item2&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item3&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item4&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item5&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item6&lt;/li&gt;
          &lt;/ul&gt;
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
), dom1El);


class Demo2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SelectableFactory.create(this.el, {
      moveInclude: (els) => {
        els.map((el) => {
          el.classList.add('active');
        });
      },
      moveExclude: (els) => {
        els.map((el) => {
          el.classList.remove('active');
        });
      },
      upInclude: (els) => {
        const str = [];
        els.map((el) => {
          str.push(el.innerText);
        });

        this.hel.innerHTML = str.join('#');
      },
      rangeClasses: ['demoSelect'],
    });
  }

  render() {
    return (
      <div className="normalDemo">
        <div
          className="normalDemo-header"
          ref={(dom) => {
            this.hel = dom;
          }}
        />
        <div
          className="normalDemo-content"
          style={{ overflow: 'hidden' }}
          ref={(dom) => {
            this.el = dom;
          }}
        >
          <ul className="normalDemo-ul" style={{ float: 'left', width: '40%' }}>
            <li className="ct-selectable-item">item1</li>
            <li className="ct-selectable-item">item2</li>
            <li className="ct-selectable-item">item3</li>
            <li className="ct-selectable-item">item4</li>
            <li className="ct-selectable-item">item5</li>
            <li className="ct-selectable-item">item6</li>
          </ul>

          <ul className="normalDemo-ul" style={{ float: 'left', width: '40%', marginLeft: 20 }}>
            <li className="ct-selectable-item">item1</li>
            <li className="ct-selectable-item">item2</li>
            <li className="ct-selectable-item">item3</li>
            <li className="ct-selectable-item">item4</li>
            <li className="ct-selectable-item">item5</li>
            <li className="ct-selectable-item">item6</li>
          </ul>
        </div>
      </div>
    );
  }
}

const dom2El = document.getElementById('demo2');
ReactDOM.render((
  <Example title="normal" introduction="normal">
    <div>
      <Demo2 />
    </div>
    <div>
      <pre>
        <code className="javascript">
          <div dangerouslySetInnerHTML={{
            __html: `
import SelectableFactory from '@ctsj/ui-selectable';
import '@ctsj/ui-selectable/selectable.less';

class Demo2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SelectableFactory.create(this.el, {
      moveInclude: (els) =&gt; {
        els.map((el) =&gt; {
          el.classList.add('active');
        });
      },
      moveExclude: (els) =&gt; {
        els.map((el) =&gt; {
          el.classList.remove('active');
        });
      },
      upInclude: (els) =&gt; {
        const str = [];
        els.map((el) =&gt; {
          str.push(el.innerText);
        });

        this.hel.innerHTML = str.join('#');
      },
      rangeClasses: ['demoSelect'],
    });
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
          style={{ overflow: 'hidden' }}
          ref={(dom) =&gt; {
            this.el = dom;
          }}
        &gt;
          &lt;ul className="normalDemo-ul" style={{ float: 'left', width: '40%' }}&gt;
            &lt;li className="ct-selectable-item"&gt;item1&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item2&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item3&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item4&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item5&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item6&lt;/li&gt;
          &lt;/ul&gt;

          &lt;ul className="normalDemo-ul" style={{ float: 'left', width: '40%', marginLeft: 20 }}&gt;
            &lt;li className="ct-selectable-item"&gt;item1&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item2&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item3&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item4&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item5&lt;/li&gt;
            &lt;li className="ct-selectable-item"&gt;item6&lt;/li&gt;
          &lt;/ul&gt;
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
), dom2El);


DemoUtil.initial();
