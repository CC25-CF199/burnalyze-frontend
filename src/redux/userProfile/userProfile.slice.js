import { createSlice } from '@reduxjs/toolkit';

import { getUserProfile, deleteUserAccount } from './userProfile.action';
import reducers from './userProfile.reducer';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(getUserProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data?.message;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occured';
    });
    builder.addCase(deleteUserAccount.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteUserAccount.fulfilled, state => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(deleteUserAccount.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occured';
    });
  },
});

export const { reducer } = userProfileSlice;
