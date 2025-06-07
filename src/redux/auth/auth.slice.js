import { createSlice } from '@reduxjs/toolkit';

import reducers from './auth.reducer';
import { authenticateUser } from './auth.action';

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(authenticateUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.loginResult;
      state.isLoggedIn = true;
      state.error = '';

      localStorage.setItem(
        'authToken',
        action.payload?.tokens?.access?.token || ''
      );
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occurred';
    });
  },
});

export const { reducer } = authSlice;
