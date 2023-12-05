import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { refreshEndpoint, signUpEndpoint } from 'state/user/endpoints';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (_, { getState }) => {
    try {
      const {
        user: { token },
      } = getState();
      const { url } = refreshEndpoint;
      const { data } = await httpClient.put(url, { refreshToken: token });
      console.log(data);
      return data;
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
