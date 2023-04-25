/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:55:12
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-25 13:46:40
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\store\features\cart-slice.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;

        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export default cartSlice;

//App.jsx
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import HomePage from "./pages/Home"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement:<ErrorPage/>,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/products", element: <ProductPage /> },
//       {path:"/products/:productId",element:<ProductDetailPage><ProductDetailPage/>} //使用动态路由:id
//     ],
//   },
// ])

// function App() {
//   return <RouterProvider router={router} />
// }
