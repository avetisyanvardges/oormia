import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { addEventEndpoint, updateEventEndpoint } from 'state/events/endpoints';
import { back } from 'services/NavigationService';

export const updateEvent = createAsyncThunk(
  'events/update',
  async ({ body, callback, id }, { getState }) => {
    try {
      const { url } = updateEventEndpoint(id);
      console.log(url);
      const response = await httpClient.put(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      callback && callback();
      back();
      console.log(response, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
