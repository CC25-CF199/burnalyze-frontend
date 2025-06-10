import { createSlice } from '@reduxjs/toolkit';

import { getHistoryById } from './historyDetails.action';
import reducers from './historyDetails.reducer';

const initialState = {
  history: null,
  loading: false,
  error: null,
};

export const historyDetailsSlice = createSlice({
  name: 'historyDetails',
  initialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(getHistoryById.pending, state => {
      state.loading = true;
    });
    builder.addCase(getHistoryById.fulfilled, (state, action) => {
      state.loading = false;
      state.history = action.payload.data;
    });
    builder.addCase(getHistoryById.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occured';
    });
  },
});

export const { reducer } = historyDetailsSlice;
