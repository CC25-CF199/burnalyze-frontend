import { createSlice } from '@reduxjs/toolkit';

import { callDetectionAPI } from './detection.action';
import reducers from './detection.reducer';

const initialState = {
  result: null,
  userImgSrc: null,
  loading: false,
  error: null,
};

export const detectionSlice = createSlice({
  name: 'detection',
  initialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(callDetectionAPI.pending, state => {
      state.loading = true;
    });
    builder.addCase(callDetectionAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(callDetectionAPI.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occured';
    });
  },
});

export const { setUserImage, resetUserImage, resetResult } =
  detectionSlice.actions;
export const { reducer } = detectionSlice;
