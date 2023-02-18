import axios from 'axios';
import {baseUrlApi} from '../../constants/url';
import {store} from '../../state/store';
import {isEmpty} from 'lodash';
import {deviceInfo} from '../../assets/deviceInfo';
import DeviceInfo from 'react-native-device-info';

const requestConfig = {
  baseURL: baseUrlApi,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const HttpClient = axios.create(requestConfig);

const handleRequest = config => {
  const {
    user: {token},
    intl: {locale},
    version: {api_version},
  } = store.getState();
  // if (
  // api_version &&
  // !isEmpty(api_version) &&
  // config.url !== ENDPOINTS.GET_VERSION &&
  // config.url !== ENDPOINTS.LOGIN
  // ) {
  // config.baseURL = config.baseURL + api_version;
  // }

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

const handleResponse = response => {
  setTimeout(() => {}, 1000);
  return response;
};

const handleError = error => {
  console.log(error.response?.data, 999);
  if (error.response && error.response.status === 401) {
  }

  if (error.response && error.response.data && error.response.status !== 401) {
  }

  return Promise.reject(error);
};

HttpClient.interceptors.request.use(handleRequest);

HttpClient.interceptors.response.use(handleResponse, handleError);

export default HttpClient;
