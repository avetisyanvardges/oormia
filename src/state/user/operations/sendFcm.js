import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { sendFcmEndpoint } from 'state/user/endpoints';

export const sendFcm = createAsyncThunk(
  'user/fcm',
  async ({ params }, { getState }) => {
    try {
      console.log(params);
      const { url } = sendFcmEndpoint;
      const { data } = await httpClient.get(url, { params });
      console.log(data, 'DATA');
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
