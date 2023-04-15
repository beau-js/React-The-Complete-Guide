import cartSlice from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-b7ad1-default-rtdb.firebaseio.com/cart.json"
      )

      if (!response.ok) {
        throw new Error("Someting went wrong")
      }

      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sending cart data successful!",
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-b7ad1-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Someting went wrong")
      }
    }

    try {
      await sendRequest()

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successful!",
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      )
    }
  }
}

export const cartActions = cartSlice.actions
