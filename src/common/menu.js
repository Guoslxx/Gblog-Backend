import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import pathToRegexp from 'path-to-regexp'

const { SubMenu } = Menu;

window.pathToRegexp = pathToRegexp;
@connect(state => state)
class MenuMap extends React.PureComponent {
    render() {
        const { config, collapsed } = this.props;
        const openKeys = config.filter(e => e.isOpen || false).map(e => e.title)
        return (
            <Menu theme="dark"
                mode="inline"
                defaultOpenKeys={openKeys}
                defaultSelectedKeys={[window.location.pathname]}
                inlineCollapsed={collapsed}
            >
                {
                    config.map((menu) => {
                        let path = `${menu.path}`;
                        path = compilePath(path, menu.params);
                        if (menu.isHide) return null;
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
                    if (subMenu.isHide) return null;

                    let path = subMenu.path;
                    path = compilePath(path, subMenu.params);
                    return (
                        <Menu.Item key={subMenu.title}>
                            <Link to={path}>
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

const compilePath = (path, params) => {
    if (!path || typeof path !== 'string') return '';
    //params必须要有对应字段的默认值
    const _params = {};
    pathToRegexp.parse(path).forEach(e => {
        if(!e.name) return;
        _params[e.name] = 'undefined';
    })
    return pathToRegexp.compile(path)(params || _params);
}

export default MenuMap;