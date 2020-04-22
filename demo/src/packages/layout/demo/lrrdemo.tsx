import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class LrrDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Content>
                <Sider>Sider</Sider>
                <Layout auto>
                  <Header>Header</Header>
                  <Content>Content</Content>
                  <Footer>Footer</Footer>
                </Layout>
              </Content>
            </Layout>
          </div>
        );
      }
    }
    
    export default LrrDemo;
  `,
  title: '左右-右侧上中下',
  description: '左右-右侧上中下。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * LrrDemo
 * @class LrrDemo;
 * @classdesc LrrDemo
 */
class LrrDemo extends React.PureComponent {
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
            <Sider>Sider</Sider>
            <Layout auto>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LrrDemo;
