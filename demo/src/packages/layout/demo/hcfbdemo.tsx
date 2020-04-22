import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class HcfbDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Header>Header</Header>
              <Content>
                <Sider>SiderLeft</Sider>
                <Content auto>Content</Content>
                <Sider>SiderRight</Sider>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        );
      }
    }
    
    export default HcfbDemo;
  `,
  title: '上中下-两边侧栏',
  description: '上中下-两边侧栏。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * HcfbDemo
 * @class HcfbDemo;
 * @classdesc HcfbDemo
 */
class HcfbDemo extends React.PureComponent {
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
            <Sider>SiderLeft</Sider>
            <Content auto>Content</Content>
            <Sider>SiderRight</Sider>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default HcfbDemo;
