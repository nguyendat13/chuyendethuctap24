import axios from 'axios'
import { urlApi } from './config';
const httpAxios = axios.create({
    baseURL: urlApi,
    // timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  httpAxios.interceptors.response.use(function (response) {
    return response.data;
  });
export default httpAxios;
