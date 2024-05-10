/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import loggedOutSlice from "./slices/logoutSlice";
import userSlice from "./slices/userSlices";

export default configureStore({
  reducer: {
    userInfo: userSlice,
    loggedOut: loggedOutSlice,
  },
});
