import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisble: false },
  reducers: {
    tooggle(state) {
      state.cartIsVisble = !state.cartIsVisble
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice
