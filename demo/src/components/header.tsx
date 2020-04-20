import React from 'react';

import './header.less';

const selectorPrefix = 'Header';

/**
 * Header
 * @class Header
 * @classdesc Header
 */
class Header extends React.PureComponent{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className={selectorPrefix}>
        <div className={`${selectorPrefix}-Logo`} />
      </div>
    );
  }
}

export default Header;
