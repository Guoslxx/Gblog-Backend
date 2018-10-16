import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const menuData = [
    { name: '控制台', path: '/app/index', icon: 'user' },
    { name: '文章管理', path: '/app/article', icon: 'bar-chart' },
    { name: 'test', path: '/app/test', icon: 'bar-chart' },
]

const MenuMap = () => (
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
);

export default MenuMap;