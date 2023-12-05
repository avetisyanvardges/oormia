import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { signUpEndpoint } from 'state/user/endpoints';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

export const userSignUp = createAsyncThunk(
  'user/userSignUp',
  async (payload, { getState }) => {
    try {
      console.log(payload);
      const { url } = signUpEndpoint;
      const { data } = await httpClient.post(url, payload);
      return data;
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
