import React from 'react';

import Header from './header';
import Nav from './nav';
import AnchorNav from './anchornav';
import Footer from './footer';

import './app.less';

const selectorPrefix = 'Demo';

/**
 * App - 整个demo的主体
 * @class App
 * @classdesc App
 */
class App extends React.PureComponent {
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
    const { children } = this.props;
    return (
      <div className={selectorPrefix}>
        <div className={`${selectorPrefix}-Header`}>
          <Header />
        </div>
        <div className={`${selectorPrefix}-Body`}>
          <div className={`${selectorPrefix}-Nav`}>
            <Nav />
          </div>
          <div className={`${selectorPrefix}-Main markdown`}>{children}</div>
        </div>
        <div className={`${selectorPrefix}-Footer`}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
