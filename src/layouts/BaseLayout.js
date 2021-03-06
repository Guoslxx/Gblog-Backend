import React from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { MenuMap, RouterMap } from '../common';
import './BaseLayout.less';
import store from '../store';
import routes from '../router';

const { Header, Sider, Content } = Layout;
export default class BaseLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = store.dispatch({
          type: 'SET_LOGGED_USER',
          logged: false
        })
        resolve(res);
      }, 500);
    })
  }
  logoutClick() {
    const { history } = this.props
    this.logout()
      .then(res => {history.push('/')})
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            theme="dark"
          >
            <div className="logo" >
              GBlog
            <span className={!this.state.collapsed ? 'indent' : null}>-Admin</span>

            </div>
            <MenuMap collapsed={this.state.collapsed}  config={routes}/>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <div className="header">
                <Button onClick={()=>{this.toggle()}} shape="circle" icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ marginLeft: '10px' }} />
                <Button onClick={() => { this.logoutClick() }} type='primary' style={{ marginLeft: '110px' }}>登出</Button>
              </div>
            </Header>
            <Content style={{ margin: '24px 16px', minHeight: 280 }}>
              <RouterMap routes={routes}/>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>

    );
  }
}
