import axios from 'axios';
import { apiUrl } from '~/constants';

function defaultApi() {
  if (__DEV__) {
    return {
      baseURL: apiUrl.dev,
    };
  } else {
    return {
      baseURL: apiUrl.prod,
    };
  }
}

const { baseURL } = defaultApi();

const api = axios.create({
  baseURL,
});

export default api;
