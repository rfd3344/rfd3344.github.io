import axios from 'axios';
import _ from 'lodash';

import { env } from 'src/core/envManager';


const createInstance = (config) => {
  const instance = axios.create({
    timeout: 10000, // default timeout: 5000,
    ...config,
  });

  instance.interceptors.response.use((resp) => resp.data);

  return instance;

};


export const gitStaticApi = () => {

  const instance = createInstance({
    baseURL: env().REACT_APP_STATIC_GIT_API,
    // timeout: 5000,
    // headers: {
    //   Authorization: token ? `Bearer ${token}` : '',
    // },
  });


  return instance;
};
