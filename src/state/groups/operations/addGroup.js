import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from 'services/HttpClient';
import { addGroupEndpoint } from 'state/groups/endpoints';
import { back } from 'services/NavigationService';

export const createGroupAction = createAsyncThunk(
  'group/create',
  async ({ body }, { getState }) => {
    try {
      console.log(body);
      const { url } = addGroupEndpoint;
      const { data } = await httpClient.post(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      back();
    } catch {
      //
    }
  },
);
