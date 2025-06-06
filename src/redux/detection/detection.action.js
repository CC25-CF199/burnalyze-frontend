import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = 'http://localhost:3000/v1/detection/predict';

export const callDetectionAPI = createAsyncThunk(
  'detection/predict',
  async (data, _thunkAPI) => {
    try {
      const response = await axios.post(requestURL, data);

      return response.data;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);
