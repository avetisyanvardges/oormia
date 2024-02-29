import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { deleteBankAccountEndpoint } from 'state/bank/endpoints';

export const deleteBankAccount = createAsyncThunk(
  'bank/delete',
  async ({ id }) => {
    try {
      const { url } = deleteBankAccountEndpoint(id);
      const { data } = await httpClient.delete(url);
      return { data };
    } catch (err) {
      //
    }
  },
);
