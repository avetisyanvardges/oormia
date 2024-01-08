import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { generateQrEndpoint } from 'state/events/endpoints';

export const generateQr = createAsyncThunk(
  'events/generate_qr',
  async ({ params, callback }, { getState }) => {
    try {
      const { url } = generateQrEndpoint;
      const { data } = await httpClient.get(url, { params });
      callback && callback();
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
