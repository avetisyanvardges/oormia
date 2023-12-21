import { createAsyncThunk } from '@reduxjs/toolkit';
import { back } from 'services/NavigationService';
import dispatch from 'utils/dispatch/dispatch';
import { editProfileEndpoint } from 'state/user/endpoints';
import httpClient from 'services/HttpClient';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';
import { show_toast } from 'state/snackbars';
import { toastMessageTypes } from 'state/snackbars/types';

export const editProfile = createAsyncThunk(
  'user/edit',
  async ({ id, body }, { getState }) => {
    try {
      const { url } = editProfileEndpoint;
      const { data } = await httpClient.put(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(fetchCurrentUser());
      dispatch(
        show_toast({
          message: 'Profile updated successfully',
          type: toastMessageTypes.SUCCESS,
          duration: 400,
        }),
      );
      back();
    } catch {
      //
    }
  },
);
