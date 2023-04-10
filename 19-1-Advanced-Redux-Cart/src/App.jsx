import { useSelector } from "react-redux"
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"

function App() {
  const isClick = useSelector((state) => state.cart.isClick)
  return (
    <Layout>
      {isClick && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
