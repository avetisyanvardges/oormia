import axios from 'axios';
import { baseUrlApi, eventControllerApi } from '../../constants/url';
import { store } from '../../state/store';
import { isEmpty } from 'lodash';
import { deviceInfo } from '../../assets/deviceInfo';
import DeviceInfo from 'react-native-device-info';
import dispatch from 'utils/dispatch/dispatch';
import { userLogAuth } from 'state/user/operations/userLogOut';
import { fetchSubCategoriesAllEndpoint } from 'state/categories/endpoints';
import { show_toast } from 'state/snackbars';
import { toastMessageTypes } from 'state/snackbars/types';
import i18n from 'i18next';

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
    user: { token },
  } = store.getState();
  const locale = i18n.language;
  const { url: subCategoriesUrl } = fetchSubCategoriesAllEndpoint;
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

  if (config.url === subCategoriesUrl) {
    config.baseURL = eventControllerApi;
  }

  return config;
};

const handleResponse = response => {
  setTimeout(() => {}, 1000);
  return response;
};

const handleError = error => {
  console.log(error.response?.data, 999);
  dispatch(
    show_toast({
      message: 'Ops, something went wrong',
      type: toastMessageTypes.ERROR,
    }),
  );
  if (error.response && error.response.status === 500) {
    dispatch(
      show_toast({
        message: 'Ops, something went wrong',
        type: toastMessageTypes.ERROR,
      }),
    );
  }

  if (error.response && error.response.status === 401) {
    dispatch(userLogAuth());
  }

  if (error.response && error.response.data && error.response.status !== 401) {
  }

  return Promise.reject(error);
};

HttpClient.interceptors.request.use(handleRequest);

HttpClient.interceptors.response.use(handleResponse, handleError);

export default HttpClient;
