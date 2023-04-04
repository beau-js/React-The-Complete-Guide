/*
 * @Author: Ethan
 * @Date: 2023-03-22 20:19:27
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-24 05:47:26
 * @FilePath: \Workspace\newsSystem\src\routers\IndexRouter.tsx
 * @Description: 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const LazyLoad = (path: string) => {
  const Comp = React.lazy(() => import(`../views/${path}`));
  return <React.Suspense fallback={<>加载中。。。</>}>
    <Comp></Comp>
  </React.Suspense>;
};

const IndexRouter = () => {

  const element = useRoutes([
    {
      path: "/login",
      element: LazyLoad("login/Login")
    },
    {
      path: "/",
      element: localStorage.getItem("token")
        ? LazyLoad("sandbox/NewsSandbox")
        : <Navigate to={"/login"}></Navigate>,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"}></Navigate>
        },
        {
          path: "/home",
          element: LazyLoad("sandbox/home/Home")
        },
        {
          path: "/user-manage/list",
          element: LazyLoad("sandbox/user-manage/UserList")
        },
        {
          path: "/right-manage/role/list",
          element: LazyLoad("sandbox/right-manage/RoleList")
        },
        {
          path: "/right-manage/right/list",
          element: LazyLoad("sandbox/right-manage/RightList")
        },
      ]
    },

    {
      path: "*",
      element: LazyLoad("NotFound")
    },

  ]);
  return element;
};



export default IndexRouter;
