import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchNotModeratedEventsEndpoint } from 'state/events/endpoints';

export const getAllNotModeratedEvents = createAsyncThunk(
  'events/notModerated',
  async (params, { getState }) => {
    try {
      const { url } = fetchNotModeratedEventsEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
