import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class HcfDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        );
      }
    }
    
    export default HcfDemo;
  `,
  title: '上中下布局',
  description: '上中下布局。',
};

const { Header, Content, Footer } = Layout;

/**
 * HcfDemo
 * @class HcfDemo;
 * @classdesc HcfDemo
 */
class HcfDemo extends React.PureComponent {
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
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default HcfDemo;
