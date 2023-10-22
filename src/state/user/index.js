import { createSlice } from '@reduxjs/toolkit';
import { userSignIn } from 'state/user/operations/userSignIn';

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
      console.log(action?.payload?.data, state);
      state.currentUser = action?.payload?.data?.userResponse;
      state.refresh_token = action?.payload?.data?.refreshToken;
      state.token = action?.payload?.data?.token;
    });
    // builder.addCase(userLogAuth, state => {
    //   state.currentUser = {};
    // });
  },
});

export default userSlice.reducer;
