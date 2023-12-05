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
