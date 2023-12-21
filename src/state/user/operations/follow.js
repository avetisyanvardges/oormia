import { createAsyncThunk } from '@reduxjs/toolkit';
import { userFollowEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';

export const userFollow = createAsyncThunk(
  'user/follow',
  async ({ id }, { getState }) => {
    try {
      const { url } = userFollowEndpoint(id);
      const { data } = await httpClient.post(url);
      console.log(data);
    } catch {
      //
    }
  },
);
