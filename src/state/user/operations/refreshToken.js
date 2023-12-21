import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { refreshEndpoint } from 'state/user/endpoints';

export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (_, { getState }) => {
    try {
      const {
        user: { token },
      } = getState();
      const { url } = refreshEndpoint;
      const { data } = await httpClient.put(url, { refreshToken: token });
      console.log(data);
      return data;
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
