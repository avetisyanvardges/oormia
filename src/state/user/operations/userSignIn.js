import {createAsyncThunk} from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import {signInEndpoint} from 'state/user/endpoints';
import {replace} from 'services/NavigationService';
import {routNames} from 'constants/routNames';

export const userSignIn = createAsyncThunk(
  'user/userSignIn',
  async (payload, {getState}) => {
    try {
      console.log(112212);
      const {url} = signInEndpoint;
      console.log(payload);
      const {data} = await httpClient.post(url, payload);
      replace(routNames.APP_LAYER);
      return {data};
    } catch (err) {
      console.log(err, 'ERROR');
    }
  },
);
