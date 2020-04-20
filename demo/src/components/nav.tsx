import React from 'react';
import { Link } from '@ctsj/router';

import './nav.less';

const selectorPrefix = 'Nav';

const ComponentNames = ['affix'];

/**
 * IState
 */
interface IState {
  activeCode: string;
}

/**
 * Nav
 * @class Nav
 * @classdesc Nav
 */
class Nav extends React.PureComponent<any, IState> {
  state: IState = {
    activeCode: ComponentNames[0],
  };

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
    const {activeCode} = this.state;
    return (
      <div className={selectorPrefix}>
        {ComponentNames.map((t) => (
          <div
            key={t}
            className={`${selectorPrefix}-Item ${activeCode === t ? 'selected': ''}`}
            onClick={() => {
              this.setState({
                activeCode: t,
              });
            }}
          >
            <Link to={`/${t}`}>{t}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Nav;
