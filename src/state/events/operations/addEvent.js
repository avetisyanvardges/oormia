import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { addEventEndpoint } from 'state/events/endpoints';
import { back } from 'services/NavigationService';
import dispatch from 'utils/dispatch/dispatch';
import { showModal } from 'state/modal';

export const addEvent = createAsyncThunk(
  'events/add',
  async ({ body, callback }, { getState }) => {
    try {
      const { url } = addEventEndpoint;
      const response = await httpClient.post(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(showModal({ type: 'event_created' }));
      callback && callback();
      back();
      console.log(response, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
