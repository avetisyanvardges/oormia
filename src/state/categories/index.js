import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesAll } from 'state/categories/operations/fetchCategoriesAll';
import { fetchSubCategoriesAll } from 'state/categories/operations/fetchSubCategoriesAll';

const initialState = {
  categories: [],
  sub_categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCategoriesAll.fulfilled, (state, action) => {
      state.categories = action?.payload?.data;
    });
    builder.addCase(fetchSubCategoriesAll.fulfilled, (state, action) => {
      state.sub_categories = action?.payload?.data;
    });
  },
});

export default categoriesSlice.reducer;
