
import { Menu, Layout } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiderBar from "../../styles/siderBar";

const {Sider} = Layout;

const MenuLink = (props) => {
    // let match = useRouteMatch({
    //   path: props.to,
    //   exact: props.activeOnlyWhenExact,
    // });
  
    return (
      <Menu.Item
        className="ant-menu-item-selected"
        key={props.key}
        icon={props.icon}
        {...props}
      >
        <Link to={props.to}>{props.label}</Link>
      </Menu.Item>
    );
  };
const SiderBarComponent = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        setCollapsed(props.isCollapse);
      }, []);
    return (
        <SiderBar>
            <img
        className="trigger"
        src="/images/menu-icon.png"
        alt="logo"
        // onClick={toggle}
      />
      <Sider
        style={{ height: "100vh", overflowX: "hidden" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        // collapsedWidth={isMobile ? 0 : undefined}
        // className={isMobile === true ? "overlay active" : ""}
      >
          {collapsed ? (
          <div className="logo ">
            <img className="logo-collapsed" src="/images/logo.png" alt="logo" />
          </div>
        ) : (
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
            <span>Fly Education</span>
          </div>
        )}
          <div className="avatar">
            <div className="avatar-img">
                <span>Admin</span>
            </div>
            <div className="avatar-info">
                <span className="username">Administrator</span> <br />
            </div>
        </div>
        <Menu
          theme="white"
          mode="inline"
        >
            <MenuLink
              label="dashboard"
              key="1"
              icon={
                <img
                  className="menu-icon"
                  src="/images/dashboard.png"
                  alt="dashboard"
                />
              }
              to="/404"
            />
          </Menu>
      </Sider>
    </SiderBar>
    )
}

export default SiderBarComponent;