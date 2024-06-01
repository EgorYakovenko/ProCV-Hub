import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllStatistics = createAsyncThunk(
  'statistic/getAll',
  async (_, thunkAPI) => {
    try {
      const statistic = await axios.get('/api/statistics');

      return statistic.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
