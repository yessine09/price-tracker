import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: false,
    isFetching: false,
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.isFetching = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.currentUser = null;
      state.error = true;
      state.isFetching = false;
      state.isAuthenticated = false;
    },
    loginStart: (state, action) => {
      state.currentUser = null;
      state.error = false;
      state.isFetching = true;
      state.isAuthenticated = false;
    },
    logOut: (state, action) => {
      state.currentUser = null;
      state.error = false;
      state.isFetching = false;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        user: { ...state.currentUser.user, ...action.payload },
      };
    },
  },
});

export const { loginSuccess, loginFailure, loginStart, updateUser, logOut } =
  userSlice.actions;
export default userSlice.reducer;
