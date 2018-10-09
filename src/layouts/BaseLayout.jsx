import React from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { MenuMap, RouterMap } from '../common';
import './BaseLayout.less';

const { Header, Sider, Content } = Layout;
export default class BaseLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = e => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            theme="light"
          >
            <div className="logo" >
              GBlog
            <span className={!this.state.collapsed ? 'indent' : null}>-Admin</span>

            </div>
            <MenuMap />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <div className="header">
                <Button onClick={this.toggle} shape="circle" icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ marginLeft: '10px' }} />
              </div>
            </Header>
            <Content style={{ margin: '24px 16px', minHeight: 280 }}>
              <RouterMap />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>

    );
  }
}
