import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { createBankAccountEndpoint } from 'state/bank/endpoints';

export const createBankAccount = createAsyncThunk(
  'bank/create',
  async ({ body, callback }) => {
    try {
      const { url } = createBankAccountEndpoint;
      const { data } = await httpClient.post(url, body);
      if (typeof callback === 'function') {
        callback(data);
      }

      return { data };
    } catch (err) {
      //
    }
  },
);
