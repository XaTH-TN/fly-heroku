import styled from "styled-components";
import "antd/dist/antd.css";

const Sidebar = styled.div`
  /* Header */
  .ant-layout-header {
    background: #7bcecc;
  }

  .trigger {
    position: absolute;
    height: 60px;
    margin-left: 175px;
    margin-top: 8px;
    z-index: 1000;
    cursor: pointer;
    transition: all 0.2s;
  }

  .ml-55 {
    margin-left: 55px;
  }

  .ml-70 {
    margin-left: 70px;
  }

  /* Logo */
  .logo {
    height: 64px;
    padding: 16px 16px 16px 46px;
    background-color: #e2f9f8;
    z-index: 2;
    position: relative;

    img {
      width: 30px;
      margin-right: 5px;
    }

    span {
      font-weight: bold;
      vertical-align: -3px;
      color: #757575;
      font-size: 18px;
    }
  }

  .logo-collapsed {
    width: 30px;
    margin-left: -23px;
  }

  .ant-layout-content .site-layout-background {
    background: #fff;
  }

  /* Avatar */
  .avatar {
    color: #757575;
    height: 100px;
    width: 100%;
  }

  .avatar-info {
    text-align: center;
    width: 100%;

    .username {
      font-size: 14px;
    }

    .status {
      font-size: 14px;
    }
  }

  .avatar-img {
    width: 60px;
    height: 60px;
    line-height: 60px;
    background-color: #ced4da;
    border-radius: 50%;
    text-align: center;
    font-size: 22px;
    color: white;
    margin: 10px auto;
    position: relative;
    z-index: 3;
  }

  .dot {
    border: 2px solid #00ae85;
    border-radius: 50%;
    background-color: #00ae85;
    display: inline-block;
    height: 4px;
    width: 4px;
    margin-right: 5px;
    vertical-align: 2px;
  }

  .ant-layout-sider-children {
    background: #fff;
  }

  /* Arrow icon */
  .ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before {
    background: #afafaf;
  }

  /* Menu item */
  .ant-menu-inline .ant-menu-item::after {
    border-right: 0px;
  }

  .ant-menu-submenu-selected,
  .ant-menu-submenu-title:hover,
  .ant-menu-submenu-title:active,
  .ant-menu-item-selected,
  .ant-menu-item:hover,
  .ant-menu-item:active {
    color: #7bcecc;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #ffffff;
    right: auto;
    left: 0;
    border-left: 5px solid #7bcecc;
    img {
      margin-left: -5px;
      filter: invert(0.5) sepia(1) hue-rotate(136deg);
    }
    color: #7bcecc;
  }

  .sub-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #e2f9f8;
    border-radius: 0px 20px 20px 0px;
    border: 0px;
    padding-left:35px !important; 
  }

  .sub-menu .ant-menu-inline .ant-menu-item::after {
    border: 0px;
  }

  /* Item Icons */
  .menu-icon {
    width: 30px;
    height: 30px;
    margin-right: 31px;
    vertical-align: -7px;
  }

  /* Menu inline */
  .ant-menu-inline .ant-menu-item:not(:last-child),
  .ant-menu-inline .ant-menu-submenu-title {
    margin-bottom: 20px;
  }

  .ant-menu-inline-collapsed > .ant-menu-item,
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0 24px;
  }

  /* Menu vertical */
  .ant-menu-vertical .ant-menu-item:not(:last-child),
  .ant-menu-submenu-title {
    margin-bottom: 20px;
  }

  .ant-menu-vertical .ant-menu-item::after {
    border-right: #fff;
  }

  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
  }

  .ant-menu-item-selected a {
    color: #7bcecc;
  }

  a:hover {
    color: #7bcecc;
  }

  .overlay {
    display: none;
    position: fixed;
    /* full screen */
    width: 100vw;
    height: 100vh;
    /* transparent black */
    background: rgba(0, 0, 0, 0.7);
    /* middle layer, i.e. appears below the sidebar */
    z-index: 998;
    opacity: 0;
    /* animate the transition */
    transition: all 0.2s ease-in-out;
  }
  /* display .overlay when it has the .active class */
  .active {
    display: block;
    opacity: 1;
  }

  .logo-header{
    position: "absolute"
    height: 64px;
    padding:16px;
  }

  .size-20{
    width: 20px;
    height: 20px;
  }
`;

export default Sidebar;
