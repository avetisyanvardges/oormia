import {createAsyncThunk} from '@reduxjs/toolkit';
import httpClient from '../../../services/HttpClient';
import {fetchSubCategoriesAllEndpoint} from 'state/categories/endpoints';

export const fetchSubCategoriesAll = createAsyncThunk(
  'categories/fetchSubCategoriesAll',
  async (_, {getState}) => {
    try {
      const {url} = fetchSubCategoriesAllEndpoint;
      const {data} = await httpClient.get(url);
      return {data};
    } catch (err) {
      //
    }
  },
);
