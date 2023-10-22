import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesAll } from 'state/categories/operations/fetchCategoriesAll';
import { fetchSubCategoriesAll } from 'state/categories/operations/fetchSubCategoriesAll';

const initialState = {
  categories: [],
  sub_categories: [],
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCategoriesAll.fulfilled, (state, action) => {
      console.log(action?.payload.data, state);
      state.categories = action?.payload?.data;
    });
    builder.addCase(fetchSubCategoriesAll.fulfilled, (state, action) => {
      console.log(action?.payload.data, state);
      state.sub_categories = action?.payload?.data;
    });
  },
});

export default locationsSlice.reducer;
