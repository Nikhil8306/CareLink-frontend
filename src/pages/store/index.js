import {configureStore, combineReducers} from '@reduxjs/toolkit';
import onBoarding from './slices/onBoarding';
import authentication from './slices/authentication';

export const store = configureStore({
  reducer: combineReducers({
    onBoarding: onBoarding,
    authentication: authentication,
  }),
});
