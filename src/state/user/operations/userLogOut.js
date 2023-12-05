import { createAsyncThunk } from '@reduxjs/toolkit';
import { replace } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import dispatch from 'utils/dispatch/dispatch';
import { logout } from 'state/user';

export const userLogAuth = createAsyncThunk(
  'user/userLogAuth',
  async (_, { getState }) => {
    try {
      dispatch(logout());
      replace(routNames.AUTH_LAYER);
    } catch {
      //
    }
  },
);
