import { createSlice } from '@reduxjs/toolkit';
import { getCoordinatesAddress } from 'state/locations/operations/getCoordinatesAddress';

const initialState = {
  formatted_address: '',
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCoordinatesAddress.fulfilled, (state, action) => {
      const { name, description } =
        action?.payload?.response?.GeoObjectCollection?.featureMember?.[0]
          ?.GeoObject;
      state.formatted_address = `${name}, ${description}`;
    });
  },
  reducers: {
    clean_formatted_address: state => ({
      ...state,
      formatted_address: '',
    }),
  },
});

export const { clean_formatted_address } = locationsSlice.actions;

export default locationsSlice.reducer;
