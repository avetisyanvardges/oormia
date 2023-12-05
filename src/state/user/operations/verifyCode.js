import { createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { verifyCodeEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';

export const verifyCode = createAsyncThunk(
  'user/verifyCode',
  async ({ code }, { getState }) => {
    try {
      const {
        user: { verification_token },
      } = getState();
      console.log('user/verifyCode------', verification_token);
      const { url } = verifyCodeEndpoint;
      const { data } = await httpClient.get(url, {
        params: { code, token: verification_token },
      });
      console.log(data, 'DATA');
      navigate(routNames.START);
    } catch {
      //
    }
  },
);
