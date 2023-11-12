import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { addEventEndpoint, fetchEventsEndpoint } from 'state/events/endpoints';

export const getAllEvents = createAsyncThunk(
  'events/getAll',
  async (_, { getState }) => {
    try {
      const { url } = fetchEventsEndpoint;
      const response = await httpClient.get(url);
      console.log(response, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
