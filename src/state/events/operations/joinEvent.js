import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { joinToEventEndpoint } from 'state/events/endpoints';
import dispatch from 'utils/dispatch/dispatch';
import { show_toast } from 'state/snackbars';
import { toastMessageTypes } from 'state/snackbars/types';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

const urlPattern = /^(https?:\/\/\S+)$/i;
export const joinEvent = createAsyncThunk(
  'events/join',
  async ({ body, callback }, { getState }) => {
    try {
      const { url } = joinToEventEndpoint;
      const { data } = await httpClient.post(url, body);
      dispatch(
        show_toast({
          message: 'Successfully joined the event',
          type: toastMessageTypes.SUCCESS,
          duration: 300,
        }),
      );
      if (urlPattern.test(data)) {
        navigate(routNames.WEB_VIEW, {
          uri: data,
          eventId: body?.eventId,
          ticketCount: body?.ticketCount,
        });
      }

      // callback && callback();
      // back();
      console.log(data, 'RES');
    } catch (e) {
      console.log(e);
    }
  },
);
