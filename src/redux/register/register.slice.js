import { createSlice } from '@reduxjs/toolkit';

import reducers from './register.reducer';
import { registerUser } from './register.action';

const initialState = {
  loading: false,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, state => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export const { reducer } = registerSlice;
