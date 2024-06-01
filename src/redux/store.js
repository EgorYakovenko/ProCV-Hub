import { configureStore } from '@reduxjs/toolkit';
import { responsesReducer } from './responses/slice';
import { statisticsReducer } from './responses/statistics/slice';

export const store = configureStore({
  reducer: {
    responses: responsesReducer,
    statistics: statisticsReducer,
  },
});
