import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_BURNALYZE_API}/detection/history/details`;

export const getHistoryById = createAsyncThunk(
  'detection/details',
  async (historyId, _thunkAPI) => {
    try {
      const response = await axios.get(`${requestURL}/${historyId}`, {
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
