/*
 * @Author: Ethan
 * @Date: 2023-03-22 22:45:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-26 04:01:15
 * @FilePath: \Workspace\newsSystem\src\components\sandbox\TopHeader.tsx
 * @Description: 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";

const TopHeader = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (

    <Header style={{ padding: 0, background: colorBgContainer }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>

  );
};

export default TopHeader;
