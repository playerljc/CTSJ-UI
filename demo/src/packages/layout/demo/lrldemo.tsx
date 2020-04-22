import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class LrlDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Content>
                <Layout auto>
                  <Header>Header</Header>
                  <Content>Content</Content>
                  <Footer>Footer</Footer>
                </Layout>
                <Sider>Sider</Sider>
              </Content>
            </Layout>
          </div>
        );
      }
    }
    
    export default LrlDemo;
  `,
  title: '左右-左侧上中下',
  description: '左右-左侧上中下。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * LrlDemo
 * @class LrlDemo;
 * @classdesc LrlDemo
 */
class LrlDemo extends React.PureComponent {
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
            <Layout auto>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
            <Sider>Sider</Sider>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LrlDemo;
