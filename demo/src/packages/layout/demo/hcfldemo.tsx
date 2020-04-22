import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class HcflDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Header>Header</Header>
              <Content>
                <Sider>Sider</Sider>
                <Content auto>Content</Content>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        );
      }
    }
    
    export default HcflDemo;
  `,
  title: '上中下-左边侧栏',
  description: '上中下-左边侧栏。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * HcflDemo
 * @class HcflDemo;
 * @classdesc HcflDemo
 */
class HcflDemo extends React.PureComponent {
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
          <Content>
            <Sider>Sider</Sider>
            <Content auto>Content</Content>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default HcflDemo;
