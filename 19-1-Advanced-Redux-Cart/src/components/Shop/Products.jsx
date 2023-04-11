/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:33:54
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 21:36:37
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\components\Shop\Products.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import ProductItem from "./ProductItem"
import classes from "./Products.module.css"

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 6,
    title: "My Second Book",
    description: "The Second book I ever wrote",
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
