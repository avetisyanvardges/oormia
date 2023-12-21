import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteProfileEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';

export const deleteUser = createAsyncThunk(
  'user/delete',
  async ({ id, callback }, { getState }) => {
    try {
      const { url } = deleteProfileEndpoint(id);
      const { data } = await httpClient.delete(url);
      callback && callback();
    } catch {
      //
    }
  },
);
