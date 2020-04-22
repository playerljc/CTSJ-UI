import React from 'react';

import Layout from '../layout';

export const Config = {
  code: `
    class TcbcautoDemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          <div>
            <Layout style={{ height: 400 }}>
              <Header>Header</Header>
              <Content auto >
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
              <Footer>Footer</Footer>
            </Layout>
          </div>
        );
      }
    }
    
    export default TcbcautoDemo;
  `,
  title: '上中下-固定上下中间自适应',
  description: '上中下-固定上下中间自适应。',
};

const { Header, Content, Footer } = Layout;

/**
 * TcbcautoDemo
 * @class TcbcautoDemo;
 * @classdesc TcbcautoDemo
 */
class TcbcautoDemo extends React.PureComponent {
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
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default TcbcautoDemo;
