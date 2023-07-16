import axios from 'axios';
import _ from 'lodash';



export const createInstance = (config) => {
  const instance = axios.create({
    timeout: 10000, // default timeout: 5 seconds
    ...config,
  });

  instance.interceptors.response.use((resp) => resp.data);

  return instance;
};
