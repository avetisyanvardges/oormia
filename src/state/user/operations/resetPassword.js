import { createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { resendEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (body, { getState }) => {
    try {
      console.log(body, 'BODY');
      const { url } = resendEndpoint;
      const { data } = await httpClient.get(url, { params: body });
      navigate(routNames.OTP);
      return data;
    } catch {
      //
    }
  },
);
