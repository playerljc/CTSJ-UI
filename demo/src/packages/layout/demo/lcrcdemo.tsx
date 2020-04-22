import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class LcrcDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Content>
                <Sider>SiderLeft</Sider>
                <Layout auto>
                  <Header>Header</Header>
                  <Content>Content</Content>
                  <Footer>Footer</Footer>
                </Layout>
                <Sider>SiderRight</Sider>
              </Content>
            </Layout>
          </div>
        );
      }
    }
    
    export default LcrcDemo;
  `,
  title: '左中右-中间上中下',
  description: '左中右-中间上中下。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * LcrcDemo
 * @class LcrcDemo;
 * @classdesc LcrcDemo
 */
class LcrcDemo extends React.PureComponent {
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
          <Content>
            <Sider>SiderLeft</Sider>
            <Layout auto>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
            <Sider>SiderRight</Sider>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LcrcDemo;
