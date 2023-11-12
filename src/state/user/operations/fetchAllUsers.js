import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchAllUsersEndpoint, signUpEndpoint } from 'state/user/endpoints';

export const fetchAllUsers = createAsyncThunk(
  'user/all',
  async (_, { getState }) => {
    try {
      const { url } = fetchAllUsersEndpoint;
      const res = await httpClient.get(url, {
        params: {
          page: 0,
          size: 100,
        },
      });
      console.log(res, 'RESPONSE');
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
