import { createAsyncThunk } from '@reduxjs/toolkit';
import { replace } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import dispatch from 'utils/dispatch/dispatch';
import { logout } from 'state/user';
import {
  followEndpoint,
  signInEndpoint,
  userFollowEndpoint,
} from 'state/user/endpoints';
import httpClient from 'services/HttpClient';

export const userFollow = createAsyncThunk(
  'user/follow',
  async ({ id }, { getState }) => {
    try {
      const { url } = userFollowEndpoint(id);
      const { data } = await httpClient.post(url);
      console.log(data);
    } catch {
      //
    }
  },
);
