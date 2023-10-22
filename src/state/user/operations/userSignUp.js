import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { signUpEndpoint } from 'state/user/endpoints';

export const userSignUp = createAsyncThunk(
  'user/userSignUp',
  async (payload, { getState }) => {
    try {
      console.log(payload);
      const { url } = signUpEndpoint;
      const res = await httpClient.post(url, payload);
      console.log(res, 'RESPONSE');
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
