import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// @ts-ignore
import {Icon} from '@ctsj/ui';

import './examplepanel.less';

const selectorPrefix = 'ExamplePanel';

interface IProps {
  id: string;
  demo?: React.ReactElement | null;
  code?: string;
  title?: string;
  description?: string;
}

interface IState {
  expandCode: boolean;
}

/**
 * ExamplePanel
 * @class ExamplePanel
 * @classdesc ExamplePanel
 */
class ExamplePanel extends React.PureComponent<IProps, IState> {
  state: IState = {
    expandCode: false,
  };

  constructor(props) {
    super(props);

    this.onExpandCode = this.onExpandCode.bind(this);
  }

  onExpandCode(): void {
    this.setState({
      expandCode: !this.state.expandCode,
    });
  }

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
    const { id, demo, code, title, description } = this.props;
    const { expandCode } = this.state;
    return (
      <div className={selectorPrefix} id={id}>
        <div className={`${selectorPrefix}-Demo`}>{demo}</div>
        <div className={`${selectorPrefix}-Mate`}>
          <section className={`${selectorPrefix}-Mate-Title`}>{title}</section>
          <section className={`${selectorPrefix}-Mate-Description`}>
            <p>{description}</p>
          </section>
          <section className={`${selectorPrefix}-Mate-Actions`}>
            <CopyToClipboard text={code} onCopy={() => alert('复制成功!')}>
              <span className="code-expand-icon fa fa-copy" title="复制代码" />
            </CopyToClipboard>

            <Icon
              type="code"
              className="code-expand-icon"
              title="显示代码"
              onClick={this.onExpandCode}
            />
          </section>
        </div>
        <div className={`${selectorPrefix}-Highlight`}>
          <pre style={{ display: expandCode ? 'block' : 'none' }}>
            <code className="typescript">{code}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default ExamplePanel;
