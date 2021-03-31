import React from 'react';
import { Button, Dropdown, Layout, Menu } from 'antd';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import NoFoundComponent from '../components/NotFound/index';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from '@ant-design/icons';

import '../styles/authorized.css';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions/login.actions';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import ClassListComponent from '../components/ClassComponent/index';
import DashboardComponent from "../components/DashboardComponent/index";

const { Header, Sider, Content, Footer } = Layout;

const MenuLink = (props) => {
  // let match = useRouteMatch({
  //   path: props.to,
  //   exact: props.activeOnlyWhenExact,
  // });

  return (
    <Menu.Item
      // className="ant-menu-item-selected"
      key={props.key}
      icon={props.icon}
      {...props}
    >
      <Link to={props.to}>{props.label}</Link>
    </Menu.Item>
  );
};

class SiderDemo extends React.Component {

  constructor(props) {
    super(props);
    this.checkExpiredToken();
  }
  componentWillReceiveProps() {
    this.checkExpiredToken();
  }

  checkExpiredToken() {
    debugger
    const idToken = localStorage.getItem("id_token");
    if (idToken) {
      const tokenInfo = jwtDecode(idToken);
      const tokenExpired = tokenInfo.exp * 1000;
      const todayTime = new Date().getTime();
      if (tokenExpired < todayTime) {
        this.props.logoutDispatch();
      }
    }
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleMenuClick = () => {
    debugger
    this.props.logoutDispatch();
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={this.state.collapsed}>
          {/* <div className="logo"> */}
            {this.state.collapsed ? (
              <div className="logo ">
                <img className="logo-collapsed" src="/logo192.png" alt="logo" />
              </div>
            ) : (
              <div className="logo">
                <img className="logo-collapsed" src="/logo192.png" alt="logo" />
                <span className="logo-span">Fly Education</span>
              </div>
            )}      
          {/* </div> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <MenuLink
              label="Dashboard"
              key="1"
              icon={<UserOutlined />}
              // icon={
              //   <img
              //     className="menu-icon"
              //     src="/images/dashboard.png"
              //     alt="dashboard"
              //   />
              // }
              to="/dashboard"
            />
            <MenuLink
              label="Lớp học"
              key="2"
              icon={<UserOutlined />}
              // icon={
              //   <img
              //     className="menu-icon"
              //     src="/images/dashboard.png"
              //     alt="dashboard"
              //   />
              // }
              to="/classes"
            />
            <MenuLink
                label="Not Found"
                key="3"
                icon={<VideoCameraOutlined />}
                // icon={
                //   <img
                //     className="menu-icon"
                //     src="/images/dashboard.png"
                //     alt="dashboard"
                //   />
                // }
                to="/404"
            />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

          <Dropdown
            overlay={() => (
            <Menu style={{ width: 170 }}>
              <Menu.Item className="menu-item">
                <Button
                  size="small"
                  style={{
                    border: "none",
                    verticalAlign: "middle",
                  }}
                  onClick={this.handleMenuClick}
                  icon={<LogoutOutlined />}
                >
                  Logout
                </Button>
              </Menu.Item>
            </Menu>
          )}
        > 
          <div className="avatar-img avatar-header">
            <span>Administrator</span>
          </div>
        </Dropdown>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 400,
            }}
          >
            <Switch>
                <Route exact path="/dashboard" component={DashboardComponent} />
                <Route exact path="/404" component={NoFoundComponent}></Route>
                <Route exact path="/classes" component={ClassListComponent}></Route>
                <Redirect to="/dashboard" />
            </Switch>
            <Footer style={{ textAlign: 'center' }}>Fly Education ©2021 Created by Fly Group</Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutDispatch: () => dispatch(logoutRequest()),
});


export default  connect(null, mapDispatchToProps)(withRouter(SiderDemo));