import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_BURNALYZE_API}/detection`;

export const getAllUserHistories = createAsyncThunk(
  'detection/histories',
  async _thunkAPI => {
    try {
      const userToken = localStorage.getItem('authToken');

      const response = await axios.get(`${requestURL}/histories`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
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
