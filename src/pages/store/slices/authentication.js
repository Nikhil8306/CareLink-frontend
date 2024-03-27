// authenticationSlice

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      (state.isAuthenticated = true), (state.user = action.payload);
    },
    logout(state, action) {
      (state.isAuthenticated = false), (state.user = null);
    },
  },
});

export const {loginSuccess, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
