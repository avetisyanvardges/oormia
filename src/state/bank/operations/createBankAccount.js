import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { createBankAccountEndpoint } from 'state/bank/endpoints';

export const createBankAccount = createAsyncThunk('bank/create', async body => {
  try {
    const { url } = createBankAccountEndpoint;
    const { data } = await httpClient.post(url, body);
    return { data };
  } catch (err) {
    //
  }
});
