import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { confirmEventEndpoint } from 'state/events/endpoints';
import { back } from 'services/NavigationService';

export const acceptEvent = createAsyncThunk(
  'events/accept',
  async ({ id }, { getState }) => {
    try {
      const { url } = confirmEventEndpoint(id);
      const { data } = await httpClient.get(url);
      back();
    } catch (e) {
      console.log(e);
    }
  },
);
