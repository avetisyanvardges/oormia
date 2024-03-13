import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBankAccounts } from 'state/bank/operations/fetchAllBankAccounts';

const initialState = {
  bank_accounts: [],
};

export const bankSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllBankAccounts.fulfilled, (state, { payload }) => {
      state.bank_accounts = payload;
    });
  },
  reducers: {},
});

export default bankSlice.reducer;
