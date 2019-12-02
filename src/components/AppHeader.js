import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import logo from '../image/logo.svg';
import '../css/AppHeader.css';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header } = Layout;

class AppHeader extends Component {

    handleMenuClick = ({ key }) => {
        if (key === "logout") {
            this.props.onLogout();
        }
    }

    render() {
        let menuItems;
        if (this.props.currentUser) {
            menuItems = [
                <Menu.Item key="/" >
                    <Link style={{ color: '#ffffff' }} to="/">Home</Link>
                </Menu.Item>,
                <Menu.Item key="/profile" className="profile-menu">
                    <ProfileDropdownMenu
                        currentUser={this.props.currentUser}
                        handleMenuClick={this.handleMenuClick} />
                </Menu.Item>
            ];
        } else {
            menuItems = [
                <Menu.Item key="/" >
                    <Link style={{ color: '#ffffff' }} to="/">Home</Link>
                </Menu.Item>,
                <Menu.Item key="/signin" >
                    <Link style={{ color: '#ffffff' }} to="/signin">Sign In</Link>
                </Menu.Item>,
                <Menu.Item key="/signup" >
                    <Link style={{ color: '#ffffff' }} to="/signup">Sign Up</Link>
                </Menu.Item>
            ];
        }
        return (
            <Header className="app-header">
                <div className="title-logo">
                    <img src={logo} alt="logo" height="40px" />
                </div>
                <div className="title-name" >
                    <Link to="/">Smart Room</Link>
                </div>
                <Menu className="title-menu"
                    mode="horizontal"
                    selectedKeys={[this.props.location.pathname]}
                    style={{ lineHeight: '64px' }} >
                    {menuItems}
                </Menu>
            </Header>
        )
    }
}

function ProfileDropdownMenu(props) {
    const dropdownMenu = (
        <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
            <Menu.Item key="profile" >
                <Link to={`/user/${props.currentUser.username}`}>
                    <div className="user-fullname-info">
                        {props.currentUser.fullName}
                    </div>
                    <div className="username-info">
                        @{props.currentUser.username}
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" >
                Sign Out
        </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={dropdownMenu}
            trigger={['click']}
            getPopupContainer={() => document.getElementsByClassName('profile-menu')[0]}>
            <a className="drop-down">
                <Icon type="user" style={{ marginRight: 0, color: '#ffffff' }} /> <Icon type="down" style={{ color: '#ffffff' }} />
            </a>
        </Dropdown>
    );
}

export default withRouter(AppHeader);
