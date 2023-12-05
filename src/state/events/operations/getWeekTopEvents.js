import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import {
  fetchEventsEndpoint,
  fetchWeekTopEventsEndpoint,
} from 'state/events/endpoints';

export const getWeekTopEvents = createAsyncThunk(
  'events/weekTops',
  async (params, { getState }) => {
    try {
      const { url } = fetchWeekTopEventsEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
