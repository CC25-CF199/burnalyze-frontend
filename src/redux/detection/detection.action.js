import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_BURNALYZE_API}/detection/predict`;

export const callDetectionAPI = createAsyncThunk(
  'detection/predict',
  async ({ data, config }, _thunkAPI) => {
    try {
      const response = await axios.post(requestURL, data, config);

      return response.data;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);
