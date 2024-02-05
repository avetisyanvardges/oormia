import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCoordinatesAddressEndpoint } from 'state/locations/endpoints';
import axios from 'axios';
import i18n from 'i18next';

export const getCoordinatesAddress = createAsyncThunk(
  'locations/address',
  async ({ longitude, latitude, callback }) => {
    try {
      const { url } = getCoordinatesAddressEndpoint;
      const { data } = await axios.get(url, {
        params: {
          geocode: `${longitude},${latitude}`, // Note the order: Longitude, Latitude
          apikey: '7e736f2e-7054-4f53-a8ba-e543301d6a0e',
          format: 'json',
          kind: 'house',
          lang: i18n.language,
        },
      });
      callback && callback(data);
      return data;
    } catch {
      //
    }
  },
);
