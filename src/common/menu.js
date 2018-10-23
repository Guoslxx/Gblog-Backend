import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';

const menuData = [
    { name: '控制台', path: '/app/index', icon: 'user' },
    { name: '文章管理', path: '/app/article', icon: 'bar-chart' },
    { name: 'test', path: '/app/test', icon: 'bar-chart' },
]
@connect(state => state)
class MenuMap extends React.PureComponent {
    render() {
        console.log(this.props,'menu!!!!!!!!!!!!!')
        return (
            <Menu theme="light" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
                {
                    menuData.map((menu, index) => (
                        <Menu.Item key={menu.name}>
                            <Link to={menu.path}>
                                <Icon type={menu.icon} />
                                <span>{menu.name}</span>
                            </Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
}

export default MenuMap;