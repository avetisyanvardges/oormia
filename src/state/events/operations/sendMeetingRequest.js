import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { sendMeetingRequestEndpoint } from 'state/events/endpoints';
import dispatch from 'utils/dispatch/dispatch';
import { show_toast } from 'state/snackbars';
import { toastMessageTypes } from 'state/snackbars/types';
import { back } from 'services/NavigationService';

export const sendMeetingRequest = createAsyncThunk(
  'events/meetingRequest',
  async ({ id, body, callback }, { getState }) => {
    try {
      const { url } = sendMeetingRequestEndpoint(id);
      const response = await httpClient.post(url, body);
      dispatch(
        show_toast({
          message: 'Request successfully sent',
          type: toastMessageTypes.SUCCESS,
          duration: 400,
        }),
      );
      back();
    } catch (e) {
      console.log(e);
    }
  },
);
