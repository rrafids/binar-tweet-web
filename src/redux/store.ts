import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/token';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
