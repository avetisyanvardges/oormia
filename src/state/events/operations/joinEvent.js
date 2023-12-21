import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { joinToEventEndpoint } from 'state/events/endpoints';
import dispatch from 'utils/dispatch/dispatch';
import { show_toast } from 'state/snackbars';
import { toastMessageTypes } from 'state/snackbars/types';

export const joinEvent = createAsyncThunk(
  'events/join',
  async ({ body, callback }, { getState }) => {
    try {
      const { url } = joinToEventEndpoint;
      const response = await httpClient.post(url, body);
      dispatch(
        show_toast({
          message: 'Successfully joined the event',
          type: toastMessageTypes.SUCCESS,
          duration: 300,
        }),
      );
      // callback && callback();
      // back();
      console.log(response, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
