import _ from 'lodash';

import {
  createInstance,
  gitStaticApi,
} from './api';


export const getMasterTree = async () => {
  const resp = await gitStaticApi().get('trees/master');
  return resp;
};


export const getResource= async (url = '') => {
  return {}
  const resp = await createInstance({ baseURL: url }).get();
  return resp;
};