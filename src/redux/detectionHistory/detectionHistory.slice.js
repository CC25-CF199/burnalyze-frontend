import { createSlice } from '@reduxjs/toolkit';

import { getAllUserHistories } from './detectionHistory.action';
import reducers from './detectionHistory.reducer';

const initialState = {
  histories: null,
  loading: false,
  error: null,
};

export const detectionHistorySlice = createSlice({
  name: 'detectionHistory',
  initialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(getAllUserHistories.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllUserHistories.fulfilled, (state, action) => {
      state.loading = false;
      state.histories = action.payload.data;
    });
    builder.addCase(getAllUserHistories.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occured';
    });
  },
});

export const { reducer } = detectionHistorySlice;
