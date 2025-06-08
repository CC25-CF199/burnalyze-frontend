import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = 'http://localhost:3000/v1/detection';

export const getHistoryById = createAsyncThunk(
  'detection/details',
  async (historyId, _thunkAPI) => {
    try {
      const response = await axios.get(
        `${requestURL}/history/details/${historyId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);
