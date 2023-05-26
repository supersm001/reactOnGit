import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../redux/reducer";

export const store = configureStore({
  reducer: {
    userDataReducer: userDataReducer,
  },
});
