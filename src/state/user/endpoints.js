import endpoint from 'utils/endpoint';

export const refreshEndpoint = endpoint('put', 'two-step');
export const signInEndpoint = endpoint('post', 'auth/sign-in');
export const signUpEndpoint = endpoint('post', 'auth/sign-up');
export const fetchAllUsersEndpoint = endpoint('get', 'api/v1/users');
export const verifyCodeEndpoint = token =>
  endpoint('post', `auth/verify/email/${token}`);
export const currentUserEndpoint = endpoint('get', 'user');

export const signOutEndpoint = endpoint('post', 'logout');

export const resetPasswordEndpoint = endpoint('post', 'password/reset');
export const setNewPasswordEndpoint = endpoint('post', 'password/reset/update');
export const resendEndpoint = endpoint('post', 'resend');
export const sendFcmEndpoint = endpoint('post', 'fcm');
