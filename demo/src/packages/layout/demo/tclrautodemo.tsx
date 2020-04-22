import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class TclrautoDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout style={{ height: 400 }}>
              <Header>Header</Header>
              <Content auto >
                <Sider>Sider</Sider>
                <Content auto>
                  <div style={{width: '100%'}}>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                  </div>
                </Content>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        );
      }
    }
    
    export default TclrautoDemo;
  `,
  title: '上中-左侧边栏右侧自适应',
  description: '上中-左侧边栏右侧自适应。',
};

const { Header, Content, Footer, Sider } = Layout;

/**
 * TclrautoDemo
 * @class TclrautoDemo;
 * @classdesc TclrautoDemo
 */
class TclrautoDemo extends React.PureComponent {
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
        <Layout style={{ height: 400 }}>
          <Header>Header</Header>
          <Content auto >
            <Sider>Sider</Sider>
            <Content auto>
              <div style={{width: '100%'}}>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </Content>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default TclrautoDemo;
