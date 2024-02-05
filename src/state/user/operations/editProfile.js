import { createAsyncThunk } from '@reduxjs/toolkit';
import dispatch from 'utils/dispatch/dispatch';
import { editProfileEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';

export const editProfile = createAsyncThunk(
  'user/edit',
  async ({ id, body, callback }, { getState }) => {
    try {
      const { url } = editProfileEndpoint;
      const { data } = await httpClient.put(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(fetchCurrentUser());
      callback && callback();
    } catch {
      //
    }
  },
);
