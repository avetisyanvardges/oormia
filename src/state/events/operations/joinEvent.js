import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { addEventEndpoint, joinToEventEndpoint } from 'state/events/endpoints';
import { back } from 'services/NavigationService';

export const joinEvent = createAsyncThunk(
  'events/join',
  async ({ body, callback }, { getState }) => {
    try {
      const { url } = joinToEventEndpoint;
      const response = await httpClient.post(url, body);
      // callback && callback();
      // back();
      console.log(response, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
