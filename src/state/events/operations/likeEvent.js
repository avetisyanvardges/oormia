import { createAsyncThunk } from '@reduxjs/toolkit';
import { likeEventEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';

export const likeEvent = createAsyncThunk(
  'event/like',
  async ({ id, callback }, { getState }) => {
    try {
      console.log(111111);
      const { url } = likeEventEndpoint(id);
      const { data } = await httpClient.get(url);
      callback && callback();
      // return data;
    } catch {
      //
    }
  },
);
