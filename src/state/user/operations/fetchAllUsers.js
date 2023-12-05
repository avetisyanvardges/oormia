import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchAllUsersEndpoint } from 'state/user/endpoints';

export const fetchAllUsers = createAsyncThunk(
  'user/all',
  async (_, { getState }) => {
    try {
      const { url } = fetchAllUsersEndpoint;
      const { data } = await httpClient.get(url, {
        params: {
          page: 0,
          size: 100,
        },
      });
      return data;
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
