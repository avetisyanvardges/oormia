import {createAsyncThunk} from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';

export const userLogAuth = createAsyncThunk(
  'users/userLogAuth',
  async (_, {getState}) => {
    const {
      users: {currentUser},
    } = getState();
    const body = {id: currentUser?.id};

    try {
      await httpClient.post('/user/logout', body);
    } catch {
      //
    }
  },
);
