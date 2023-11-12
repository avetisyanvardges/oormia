import { createSlice } from '@reduxjs/toolkit';
import { userSignIn } from 'state/user/operations/userSignIn';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';

const initialState = {
  currentUser: '',
  token: '',
  refresh_token: '',
  loader: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.currentUser = action?.payload?.data?.userResponse;
      state.refresh_token = action?.payload?.data?.refreshToken;
      state.token = action?.payload?.data?.token;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action?.payload;
    });
    // builder.addCase(userLogAuth, state => {
    //   state.currentUser = {};
    // });
  },
});

export default userSlice.reducer;
