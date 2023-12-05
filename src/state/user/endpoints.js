import endpoint from 'utils/endpoint';

export const refreshEndpoint = endpoint('put', 'auth/refresh');
export const signInEndpoint = endpoint('post', 'auth/sign-in');
export const signUpEndpoint = endpoint('post', 'auth/sign-up');
export const fetchAllUsersEndpoint = endpoint('get', 'api/v1/users/');
export const verifyCodeEndpoint = endpoint('get', 'auth/verify/email/');
export const currentUserEndpoint = endpoint('get', 'api/v1/users/current');
export const editProfileEndpoint = endpoint('get', 'api/v1/users');
export const userFollowEndpoint = id =>
  endpoint('post', `/api/v1/users/follow/${id}`);

export const signOutEndpoint = endpoint('post', 'logout');

export const resetPasswordEndpoint = endpoint('get', 'auth/reset-password');
export const setNewPasswordEndpoint = endpoint('post', 'password/reset/update');
export const likeEventEndpoint = id =>
  endpoint('post', `api/v1/users/prefer/${id}`);
export const resendEndpoint = endpoint('get', '/auth/resend-code');
export const sendFcmEndpoint = endpoint('post', 'fcm');
