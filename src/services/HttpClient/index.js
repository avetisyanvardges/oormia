import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {loaderTypes, toastTypes, userTypes} from 'state/types';
import {baseUrlApi} from 'constants/url';
import dispatch from 'hooks/dispatch/dispatch';
import {store} from 'state/store';
import {isEmpty} from 'lodash';
import {ENDPOINTS} from 'constants/endpoints';
import {deviceInfo} from 'assets/deviceInfo';
import DeviceInfo from 'react-native-device-info';

const requestConfig = {
  baseURL: baseUrlApi,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const HttpClient = axios.create(requestConfig);

const handleRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  dispatch(toastTypes.SET_TOAST_MASSAGE, {data: ''});
  const {
    user: {token},
    intl: {locale},
    version: {api_version},
  } = store.getState();
  dispatch(loaderTypes.SHOW_LOADER);
  if (
    api_version &&
    !isEmpty(api_version) &&
    config.url !== ENDPOINTS.GET_VERSION &&
    config.url !== ENDPOINTS.LOGIN
  ) {
    config.baseURL = config.baseURL + api_version;
  }

  if (config.headers) {
    config.headers['X-localization'] = locale;
    DeviceInfo.getUniqueId().then(res => {
      if (deviceInfo.ios) {
        config.headers = {
          ...config.headers,
          guid_id: res,
        };
      } else {
        config.headers = {
          ...config.headers,
          app_id: res,
        };
      }
    });

    if (!isEmpty(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
};

const handleResponse = (response: AxiosResponse): AxiosResponse => {
  setTimeout(() => {
    dispatch(loaderTypes.HIDE_LOADER);
  }, 1000);
  return response;
};

const handleError = (error: AxiosError): Promise<AxiosError> => {
  console.log(error.response?.data, 999);
  dispatch(loaderTypes.HIDE_LOADER);
  if (error.response && error.response.status === 401) {
    dispatch(userTypes.SIGN_OUT_REQUEST);
  }

  if (error.response && error.response.data && error.response.status !== 401) {
    dispatch(
      toastTypes.SET_TOAST_MASSAGE,
      error.response.data || 'alerts.something_went_wrong',
    );
    dispatch(toastTypes.SET_TOAST_TYPE, 'error');
    dispatch(toastTypes.SHOW_TOAST);
  }

  return Promise.reject(error);
};

HttpClient.interceptors.request.use(handleRequest);

HttpClient.interceptors.response.use(handleResponse, handleError);

export default HttpClient;
