import endpoint from 'utils/endpoint';

export const savePictureEndpoint = endpoint('post', 'api/v1/pictures');
export const changeUserGeneralPicEndpoint = endpoint('put', 'api/v1/pictures');
export const deletePictureByIdEndpoint = id =>
  endpoint('delete', `api/v1/pictures/${id}`);
export const findUserGeneralPicEndpoint = id =>
  endpoint('get', `api/v1/pictures/userId/${id}`);
