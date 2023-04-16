import {createSlice} from '@reduxjs/toolkit';
import {userLogout} from './operations/userLogOut';

const initialState = {
  currentUser: '',
  loader: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(userLogout, state => {
      state.currentUser = {};
    });
  },
});

export default usersSlice.reducer;
