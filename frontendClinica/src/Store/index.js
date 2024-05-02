// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  // otros middleware y opciones aquí si las tienes
});

export const persistor = persistStore(store);

