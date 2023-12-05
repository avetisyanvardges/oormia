import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from 'services/HttpClient';
import { getAllGroupsEndpoint } from 'state/groups/endpoints';

export const getAllGroups = createAsyncThunk(
  'group/all',
  async (_, { getState }) => {
    try {
      const { url } = getAllGroupsEndpoint;
      const { data } = await httpClient.get(url);
      console.log(data, 'DATA');
    } catch {
      //
    }
  },
);
