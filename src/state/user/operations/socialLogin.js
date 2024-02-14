import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { socialLoginEndpoint } from 'state/user/endpoints';
import messaging from '@react-native-firebase/messaging';
import dispatch from 'utils/dispatch/dispatch';
import { sendFcm } from 'state/user/operations/sendFcm';

export const socialLogin = createAsyncThunk(
  'user/socialLogin',
  async (payload, { getState }) => {
    try {
      console.log(112212);
      const { url } = socialLoginEndpoint;
      console.log(payload);
      const { data } = await httpClient.post(url, payload);
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        messaging()
          .getToken()
          .then(fcmToken => {
            console.log(fcmToken, 'FCMTOKEN');
            if (data?.data?.token) {
              dispatch(sendFcm({ params: { token: fcmToken } }));
            }
          });
        console.log('Authorization status:', authStatus);
      }

      return { data };
    } catch (err) {
      console.log(err.message, 'ERROR');
    }
  },
);
