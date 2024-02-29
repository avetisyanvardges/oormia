import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchAllBankAccountsEndpoint } from 'state/bank/endpoints';

export const fetchAllBankAccounts = createAsyncThunk(
  'bank/accounts',
  async () => {
    try {
      const { url } = fetchAllBankAccountsEndpoint;
      const { data } = await httpClient.get(url);
      return { data };
    } catch (err) {
      //
    }
  },
);
