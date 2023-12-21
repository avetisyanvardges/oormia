import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { addFreeDaysEndpoint } from 'state/user/endpoints';
import dispatch from 'utils/dispatch/dispatch';
import { show_toast } from 'state/snackbars';
import { toastMessageTypes } from 'state/snackbars/types';
import { back } from 'services/NavigationService';

export const addFreeDays = createAsyncThunk(
  'user/addFreeDays',
  async ({ body }, { getState }) => {
    try {
      const { url } = addFreeDaysEndpoint;
      const { data } = await httpClient.post(url, body);
      console.log(data, 'DATA');
      dispatch(
        show_toast({
          message: 'Free days added',
          type: toastMessageTypes.SUCCESS,
          duration: 250,
        }),
      );
      back();
      return data;
    } catch (err) {
      console.log('error', err);
      //
    }
  },
);
