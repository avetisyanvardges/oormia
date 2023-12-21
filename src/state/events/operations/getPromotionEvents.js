import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchPromotionEventsEndpoint } from 'state/events/endpoints';

export const getPromotionEvents = createAsyncThunk(
  'events/promotion',
  async (params, { getState }) => {
    try {
      const { url } = fetchPromotionEventsEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
