import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchAllUsersEndpoint } from 'state/user/endpoints';

export const fetchAllUsers = createAsyncThunk(
  'user/all',
  async ({ params }, { getState }) => {
    try {
      const { url } = fetchAllUsersEndpoint;
      const { data } = await httpClient.get(url, {
        params: params,
      });
      return { data, params };
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
