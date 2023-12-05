import { createAsyncThunk } from '@reduxjs/toolkit';
import { back, replace } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import dispatch from 'utils/dispatch/dispatch';
import { logout } from 'state/user';
import {
  editProfileEndpoint,
  followEndpoint,
  signInEndpoint,
  userFollowEndpoint,
} from 'state/user/endpoints';
import httpClient from 'services/HttpClient';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';
import { refreshToken } from 'state/user/operations/refreshToken';

export const editProfile = createAsyncThunk(
  'user/edit',
  async ({ id, body }, { getState }) => {
    try {
      const { url } = editProfileEndpoint;
      const { data } = await httpClient.put(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(fetchCurrentUser());
      back();
    } catch {
      //
    }
  },
);
