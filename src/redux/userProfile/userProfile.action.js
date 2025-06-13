import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_BURNALYZE_API}/user`;

export const getUserProfile = createAsyncThunk(
  'user/profile',
  async (userId, _thunkAPI) => {
    try {
      const response = await axios.get(`${requestURL}/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      return response;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);

export const deleteUserAccount = createAsyncThunk(
  'user/delete',
  async (userId, _thunkAPI) => {
    try {
      const response = await axios.delete(`${requestURL}/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      return response;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);
