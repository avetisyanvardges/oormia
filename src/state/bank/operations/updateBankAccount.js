import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { updateBankAccountEndpoint } from 'state/bank/endpoints';

export const updateBankAccount = createAsyncThunk(
  'bank/update',
  async ({ id }) => {
    try {
      const { url } = updateBankAccountEndpoint(id);
      const { data } = await httpClient.put(url);
      return { data };
    } catch (err) {
      //
    }
  },
);
