import {createSlice} from '@reduxjs/toolkit';
import {userLogAuth} from './operations/userLogOut';

const initialState = {
  currentUser: '',
  loader: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(userLogAuth, state => {
      state.currentUser = {};
    });
  },
});

export default usersSlice.reducer;
