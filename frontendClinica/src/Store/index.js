import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicer/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

