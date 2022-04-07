import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      console.log(state)
    },
    logOutStart: (state) => {
      state.isFetching = true;
    },
    logOutSuccess: (state, action) => {
      state.isFetching = false;
      localStorage.removeItem('persist:root')
      state.currentUser = '';
    },
    logOutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      console.log(state)
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOutStart, logOutSuccess, logOutFailure } = userSlice.actions;
export default userSlice.reducer;