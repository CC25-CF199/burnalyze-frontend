import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_BURNALYZE_API}/auth/register`;

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, _thunkAPI) => {
    const { username, firstname, lastname, email, password } = data;

    try {
      const response = await axios.post(requestURL, {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });

      return response;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.response.data : error
      );
    }
  }
);
