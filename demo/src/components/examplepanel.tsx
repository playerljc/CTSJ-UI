import React from 'react';

import './examplepanel.less';

const selectorPrefix = 'ExamplePanel';

interface IProps {
  demo?: React.ReactElement | null,
  code?: string,
  title?: string,
  description?:string,
}

interface IState {

}

/**
 * ExamplePanel
 * @class ExamplePanel
 * @classdesc ExamplePanel
 */
class ExamplePanel extends React.PureComponent<IProps, IState> {
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

    const {demo,code,title,description} = this.props;
    return (
      <div className={selectorPrefix}>
        <div className={`${selectorPrefix}-Demo`}>{demo}</div>
        <div className={`${selectorPrefix}-Mate`}>
          <section className={`${selectorPrefix}-Mate-Title`}>{title}</section>
          <section className={`${selectorPrefix}-Mate-Description`}>
            <p>{description}</p>
          </section>
          <section className={`${selectorPrefix}-Mate-Actions`}>

          </section>
        </div>
        <div className={`${selectorPrefix}-Highlight`}>
          <pre>
            <code className="typescript">
              {code}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default ExamplePanel;
