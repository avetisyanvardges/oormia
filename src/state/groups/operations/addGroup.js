import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from 'services/HttpClient';
import { addGroupEndpoint } from 'state/groups/endpoints';

export const createGroupAction = createAsyncThunk(
  'group/create',
  async (body, { getState }) => {
    try {
      const { url } = addGroupEndpoint;
      const { data } = await httpClient.post(url, body);
      console.log(data);
    } catch {
      //
    }
  },
);
