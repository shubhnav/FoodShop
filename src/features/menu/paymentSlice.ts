import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export type PaymentSliceState = {
  total: number

}

const initialState: PaymentSliceState = {
  total: 0,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const PaymentSlice = createAppSlice({
  name: "Payment",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.total += action.payload
      },
    ),
 
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    getTotal: Payment => Payment.total
  },
})

// Action creators are generated for each case reducer function.
export const {incrementByAmount } =
  PaymentSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { getTotal } = PaymentSlice.selectors

