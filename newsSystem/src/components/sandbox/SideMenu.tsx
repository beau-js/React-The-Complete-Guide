/*
 * @Author: Ethan
 * @Date: 2023-03-22 22:44:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-25 00:04:41
 * @FilePath: \Workspace\newsSystem\src\components\sandbox\SideMenu.tsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首页", "sub1", <MailOutlined />),
  getItem("用户管理", "sub2", <AppstoreOutlined />, [
    getItem(<Link to="/user-manage/list">用户列表</Link>, "1"),
  ]),
  getItem("权限管理", "sub3", <SettingOutlined />, [
    getItem("角色列表", "2"),
    getItem("权限列表", "3"),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

const SideMenu = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [selectedKeys, setSelectedKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    // 定义一个函数用来处理点击事件
    setSelectedKeys([key]); // 设置当前选中的 key 值
  };

  return (
    <Sider trigger={null} collapsible /* collapsed={collapsed} */>
      <div className="logo">全球新闻发布管理系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        // style={{ width: 256 }}
        items={items}
        onClick={handleClick}
      />
    </Sider>
  );
};

export default SideMenu;
