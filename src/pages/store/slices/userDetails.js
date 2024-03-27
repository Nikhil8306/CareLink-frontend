// creating user details reducer here

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  gender: '',
  age: 0,
  location: '',
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    updateDetails: (state, action) => {
      // Assuming action.payload contains the updated details
      return {...state, ...action.payload};
    },
  },
});

export const {updateDetails} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
