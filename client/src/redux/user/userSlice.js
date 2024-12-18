import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  cartItems:0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    getCartItems: (state, action) => {
      state.cartItems = action.payload;
    }
  },
});

export default userSlice.reducer;

export const { signInSuccess, signOutSuccess, getCartItems } = userSlice.actions;
