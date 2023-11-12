import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { currentUserEndpoint } from 'state/user/endpoints';

export const fetchCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { getState }) => {
    try {
      const { url } = currentUserEndpoint;
      const { data } = await httpClient.get(url);
      return data;
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
