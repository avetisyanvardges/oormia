import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { addEventEndpoint } from 'state/events/endpoints';

export const addEvent = createAsyncThunk(
  'events/add',
  async ({ body }, { getState }) => {
    try {
      const { url } = addEventEndpoint;
      const response = await httpClient.post(url, { ...body });
      console.log(response, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
