import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_BURNALYZE_API}/auth/login`;

export const authenticateUser = createAsyncThunk(
  'auth/login',
  async (data, _thunkAPI) => {
    const { email, password } = data;

    try {
      const response = await axios.post(requestURL, {
        email: email,
        password: password,
      });

      return { ...response.data };
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.response.data : error
      );
    }
  }
);
