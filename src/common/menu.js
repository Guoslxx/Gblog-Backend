import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const menuData = [
    { name: '控制台', path: '/dashboard', icon: 'user' },
    { name: '文章管理', path: '/article', icon: 'bar-chart' },
]

const MenuMap = () => (
    <Menu theme="light" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
        {
            menuData.map((menu, index) => (
                <Menu.Item key={menu.path}>
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