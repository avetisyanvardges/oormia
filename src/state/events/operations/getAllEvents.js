import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchEventsEndpoint } from 'state/events/endpoints';

export const getAllEvents = createAsyncThunk(
  'events/getAll',
  async (params, { getState }) => {
    try {
      const { url } = fetchEventsEndpoint;
      const { data } = await httpClient.get(url, { params });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
