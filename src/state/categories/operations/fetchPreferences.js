import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchPreferencesEndpoint } from 'state/categories/endpoints';

export const fetchPreferences = createAsyncThunk(
  'categories/fetchPreferences',
  async (_, { getState }) => {
    try {
      const { url } = fetchPreferencesEndpoint;
      const { data } = await httpClient.get(url);
      return { data };
    } catch (err) {
      //
    }
  },
);
