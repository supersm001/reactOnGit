import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userReducer",
  initialState: {
    login: false,
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    setLogin(state, action) {
      state.login = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const {
  setLogin,
  setUsername,
  setEmail,
  setPassword,
} = userDataSlice.actions;
export default userDataSlice.reducer;
