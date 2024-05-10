import { createSlice } from "@reduxjs/toolkit";

export const loggedOutSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    loggedOutUser: (state, action) => {
      state.value = {};
    },
  },
});

export const { loggedOutUser } = loggedOutSlice.actions;

export default loggedOutSlice.reducer;
