import React from 'react';
import {Link} from '@ctsj/router';

import './app.less';

const ComponentNames = [
  'affix',
];

/**
 * App
 * @class App
 * @classdesc App
 */
class App extends React.PureComponent {
  state = {

  };

  constructor(props) {
    super(props);
  }

  renderBody(): React.ReactElement {
    const {children} = this.props;
    return (
      <div className="Body">
        {children}
      </div>
    );
  }

  renderNav(): React.ReactElement {
    return (
      <ul className="Nav">
        {ComponentNames.map(t => (
          <li key={t} className="NavItem">
            <Link to={`/${t}`}>{t}</Link>
          </li>
        ))}
      </ul>
    );
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="App">
        {this.renderNav()}
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
