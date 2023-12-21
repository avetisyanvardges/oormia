import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchUpcomingEventHistoryEndpoint } from 'state/events/endpoints';

export const getUpcomingEventHistory = createAsyncThunk(
  'events/upcomingHistory',
  async (params, { getState }) => {
    try {
      const { url } = fetchUpcomingEventHistoryEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
