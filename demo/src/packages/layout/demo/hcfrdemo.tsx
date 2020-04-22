import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class HcfrDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout>
              <Header>Header</Header>
              <Content>
                <Content auto>Content</Content>
                <Sider>Sider</Sider>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        );
      }
    }

export default HcfrDemo;
  `,
  title: '上中下-右边侧栏',
  description: '上中下-右边侧栏。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * HcfrDemo
 * @class HcfrDemo;
 * @classdesc HcfrDemo
 */
class HcfrDemo extends React.PureComponent {
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
            <Content auto>Content</Content>
            <Sider>Sider</Sider>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default HcfrDemo;
