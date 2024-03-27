import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: 0,
  gender: null,
  isProfileComplete: true,
};

const onBoardingSlice = createSlice({
  name: 'onBoarding',
  initialState,
  reducers: {
    onBoardingSuccess(state, action) {
      state.isProfileComplete = true;
    },
    onBoardingFailed(state, action) {
      state.isProfileComplete = false;
    },
  },
});

export const {onBoardingSuccess, onBoardingFailed} = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
