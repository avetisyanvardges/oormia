import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchEventByIdEndpoint } from 'state/events/endpoints';

export const getEventById = createAsyncThunk(
  'events/byId',
  async ({ id }, { getState }) => {
    try {
      const { url } = fetchEventByIdEndpoint(id);
      const { data } = await httpClient.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
