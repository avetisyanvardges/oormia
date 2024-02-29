import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import { fetchCategoriesAllEndpoint } from 'state/categories/endpoints';

export const fetchCategoriesAll = createAsyncThunk(
  'categories/fetchAllBankAccounts',
  async (_, { getState }) => {
    try {
      const { url } = fetchCategoriesAllEndpoint;
      const { data } = await httpClient.get(url);
      return { data };
    } catch (err) {
      //
    }
  },
);
