import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { findNotificationsByFrom } from 'state/notifications/endpoints';

export const findNotificationByFrom = createAsyncThunk(
  'notifications/byFrom',
  async ({ from }, { getState }) => {
    try {
      const { url } = findNotificationsByFrom(from);
      const response = await httpClient.get(url);

      // console.log(response, 'response');
    } catch {
      //
    }
  },
);
