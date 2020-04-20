import React from 'react';

import './footer.less';

const selectorPrefix = 'Footer';

/**
 * Footer
 * @class Footer
 * @classdesc Footer
 */
class Footer extends React.PureComponent{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className={selectorPrefix} />
    );
  }
}

export default Footer;
