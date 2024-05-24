import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllResponses = createAsyncThunk(
  'response/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/responses');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addResponse = createAsyncThunk(
  'response/addResponse',
  async (newResponse, thunkAPI) => {
    try {
      const res = await axios.post('/api/response', newResponse);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
