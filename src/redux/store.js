import { configureStore } from '@reduxjs/toolkit';
import { responsesReducer } from './responses/slice';

export const store = configureStore({
  reducer: {
    responses: responsesReducer,
  },
});
