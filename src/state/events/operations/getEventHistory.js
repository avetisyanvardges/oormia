import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchEventHistoryEndpoint } from 'state/events/endpoints';

export const getEventHistory = createAsyncThunk(
  'events/history',
  async (params, { getState }) => {
    try {
      const { url } = fetchEventHistoryEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
