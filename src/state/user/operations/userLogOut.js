import { createAsyncThunk } from '@reduxjs/toolkit';
import { replace } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

export const userLogAuth = createAsyncThunk(
  'user/userLogAuth',
  async (_, { getState }) => {
    try {
      replace(routNames.AUTH_LAYER);
    } catch {
      //
    }
  },
);
