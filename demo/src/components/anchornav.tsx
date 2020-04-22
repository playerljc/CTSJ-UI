import React from 'react';

import './anchornav.less';

const selectorPrefix = 'AnchorNav';

export interface IEntry {
  name: string;
  anchor: string;
}

interface IProps {
  data: IEntry[];
}

/**
 * AnchorNav
 * @class AnchorNav
 * @classdesc AnchorNav
 */
class AnchorNav extends React.PureComponent<IProps, any> {
  /**
   * getActiveCode
   * @return {String}
   */
  getActiveCode(): string {
    const hash = window.location.hash;
    if (!hash.startsWith('#')) return '';

    return hash.substring(1);
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
    const { data = [] } = this.props;

    const activeCode = this.getActiveCode();

    return (
      <div className={selectorPrefix}>
        <ul className={`${selectorPrefix}-Inner`}>
          {data.map((t: IEntry) => (
            <li
              className={`${selectorPrefix}-Item ${activeCode === t.anchor ? 'selected' : ''}`}
              key={t.anchor}
              title={t.name}
            >
              <a href={`#${t.anchor}`}>{t.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnchorNav;
