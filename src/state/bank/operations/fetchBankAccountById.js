import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchBankAccountByIdEndpoint } from 'state/bank/endpoints';

export const fetchBankAccountById = createAsyncThunk(
  'bank/account',
  async ({ id }) => {
    try {
      const { url } = fetchBankAccountByIdEndpoint(id);
      const { data } = await httpClient.get(url);
      return { data };
    } catch (err) {
      //
    }
  },
);
