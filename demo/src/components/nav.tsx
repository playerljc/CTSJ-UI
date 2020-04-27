import React from 'react';
import { Link } from '@ctsj/router';

import './nav.less';

const selectorPrefix = 'Nav';

const ComponentNames = [
  {
    name: 'affix',
    label: '固钉',
  },
  {
    name: 'icon',
    label: '图标',
  },
  {
    name: 'layout',
    label: '布局',
  },
  {
    name: 'grid',
    label: '栅格',
  }
];

/**
 * Nav
 * @class Nav
 * @classdesc Nav
 */
class Nav extends React.PureComponent<any, any> {
  /**
   * getActiveCode
   * @return string
   */
  getActiveCode(): string {
    const names = window.location.pathname.split('/');
    if (names.length >= 2) {
      return names[1];
    } else {
      return '';
    }
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
    const activeCode = this.getActiveCode();
    return (
      <div className={selectorPrefix}>
        {ComponentNames.map((t) => (
          <div key={t.name} className={`${selectorPrefix}-Item ${activeCode === t.name ? 'selected' : ''}`}>
            <Link to={`/${t.name}`}>
              {t.name}
              <span>{t.label}</span>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Nav;
