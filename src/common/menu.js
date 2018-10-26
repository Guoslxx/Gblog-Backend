import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

import config from '../utils/config.js';

const { pathPrefix } = config;
const { SubMenu } = Menu;

@connect(state => state)
class MenuMap extends React.PureComponent {

    render() {
        const { config, collapsed } = this.props;
        const openKeys = config.filter(e => e.isOpen || false).map(e => e.title)
        return (
            <Menu theme="light"
                mode="inline"
                defaultOpenKeys={openKeys}
                defaultSelectedKeys={[window.location.pathname]}
                inlineCollapsed={collapsed}
            >
                {
                    config.map((menu) => {
                        const path = `${pathPrefix}${menu.path}`
                        if (!menu.children) {
                            return (
                                <Menu.Item key={menu.title}>
                                    <Link to={path}>
                                        <Icon type={menu.icon} />
                                        <span>{menu.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        } else {
                            return getSubMenu(menu);
                        }
                    })
                }
            </Menu>
        )
    }
}

const getSubMenu = (menu) => {
    return (
        <SubMenu key={menu.title} title={<span><Icon type="appstore" /><span>{menu.title}</span></span>}>
            {
                menu.children.map(subMenu => {
                    const path = `${pathPrefix}`
                    return (
                        <Menu.Item key={subMenu.title}>
                            <Link to={path + subMenu.path}>
                                {subMenu.icon && <Icon type={subMenu.icon} />}
                                <span>{subMenu.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                })
            }
        </SubMenu>
    )
}

export default MenuMap;