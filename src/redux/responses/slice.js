import { createSlice } from '@reduxjs/toolkit';
import { getAllResponses, addResponse } from './operations';

const responsesSlice = createSlice({
  name: 'responses',
  initialState: {
    data: [
      {
        date: '',
        nameOfCompany: '',
        link: '',
        dropdown: 'option1',
        interview: '',
      },
    ],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateRow: (state, action) => {
      const { index, field, value } = action.payload;
      state.data[index][field] = value;
    },
    addRow: state => {
      state.data.push({
        date: '',
        nameOfCompany: '',
        link: '',
        dropdown: 'option1',
        interview: '',
      });
    },
    removeRow: (state, action) => {
      const index = action.payload;
      state.data = state.data.filter((_, i) => i !== index);
    },
  },
  extraReducers: bulder =>
    bulder
      .addCase(getAllResponses.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllResponses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAllResponses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addResponse.pending, state => {
        state.status = 'loading';
      })
      .addCase(addResponse.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addResponse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }),
});

export const { updateRow, addRow, removeRow } = responsesSlice.actions;

export const responsesReducer = responsesSlice.reducer;
