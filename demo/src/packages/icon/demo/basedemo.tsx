import React from 'react';
// @ts-ignore
import FontAwesoneFreeCategories from '@fortawesome/fontawesome-free/metadata/categories.yml';
import Icon from '../icon';

const selectorPrefix = 'IconDemoInner';

export const Config = {
  code: `
    
  `,
  title: '基本',
  description: '列出全部图标',
};

/**
 * BaseDemo
 * @class BaseDemo;
 * @classdesc BaseDemo
 */
class BaseDemo extends React.PureComponent {
  renderInner() {
    const categories = Object.getOwnPropertyNames(FontAwesoneFreeCategories);
    return categories.map((c, index) => {
      const { icons, label } = FontAwesoneFreeCategories[c];
      return (
        <dl
          className={`${selectorPrefix}-Categorie`}
          key={index}
        >
          <dt className={`${selectorPrefix}-CategorieTitle`}><h3>{label}</h3></dt>
          <dd className={`${selectorPrefix}-CategorieBody`}>
            {icons.map((i) => (
              <div key={i}>
                <div className={`${selectorPrefix}-CategorieIcon`}>
                  <Icon type={i} />
                </div>
                <div className={`${selectorPrefix}-CategorieName`}>{i}</div>
              </div>
            ))}
          </dd>
        </dl>
      );
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
    return <div className={selectorPrefix}>{this.renderInner()}</div>;
  }
}

export default BaseDemo;
