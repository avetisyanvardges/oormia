import {createAsyncThunk} from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';

export const userSignIn = createAsyncThunk(
  'users/userSignIn',
  async (_, {getState}) => {
    const {
      users: {currentUser},
    } = getState();
    const body = {id: currentUser?.id};

    try {
      await httpClient.post('/auth/sign-in', body);
    } catch {
      //
    }
  },
);
