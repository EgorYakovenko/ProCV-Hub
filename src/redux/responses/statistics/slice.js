import { createSlice } from '@reduxjs/toolkit';
import { getAllStatistics } from './operations';

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },

  extraReducers: bulder =>
    bulder
      .addCase(getAllStatistics.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllStatistics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAllStatistics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }),
});

export const statisticsReducer = statisticsSlice.reducer;
