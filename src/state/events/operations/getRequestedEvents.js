import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchRequestedEventsEndpoint } from 'state/events/endpoints';

export const getRequestedEvents = createAsyncThunk(
  'events/requested',
  async (params, { getState }) => {
    try {
      const { url } = fetchRequestedEventsEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
