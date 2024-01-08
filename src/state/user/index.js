import { createSlice } from '@reduxjs/toolkit';
import { userSignIn } from 'state/user/operations/userSignIn';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';
import { resetPassword } from 'state/user/operations/resetPassword';
import { userSignUp } from 'state/user/operations/userSignUp';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { refreshToken } from 'state/user/operations/refreshToken';

const initialState = {
  currentUser: '',
  speakers: [],
  token: '',
  refresh_token: '',
  verification_token: '',
  loader: false,
  users: [],
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
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.verification_token = action?.payload;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      console.log(action?.payload, 'action?.payload');
      state.verification_token = action?.payload;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      if (action?.payload?.params?.calendar) {
        state.speakers = action?.payload?.data;
      } else {
        state.users = action?.payload?.data;
      }
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.token = action?.payload;
    });
  },
  reducers: {
    logout: state => ({
      ...state,
      currentUser: '',
      token: '',
      refresh_token: '',
    }),

    clean_verification_token: state => ({
      ...state,
      verification_token: '',
    }),
  },
});

export const { logout, clean_verification_token } = userSlice.actions;
export default userSlice.reducer;
