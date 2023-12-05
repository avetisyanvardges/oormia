import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import {
  addEventEndpoint,
  deleteEventEndpoint,
  updateEventEndpoint,
} from 'state/events/endpoints';
import { back, navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

export const deleteEvent = createAsyncThunk(
  'events/delete',
  async ({ id }, { getState }) => {
    try {
      const { url } = deleteEventEndpoint(id);
      const response = await httpClient.delete(url);
      navigate(routNames.APP_LAYER);
    } catch (e) {
      console.log(e);
    }
  },
);
