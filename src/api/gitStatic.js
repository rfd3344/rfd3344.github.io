import _ from 'lodash';

import { createInstance } from './api';

import { env } from 'src/core/envManager';

export const gitStaticApi = (config) => {
  const instance = createInstance({
    baseURL: env().REACT_APP_GITHUB_API,
  });


  return instance;
};


export const getMasterTree = async (relativeUrl = '') => {
  const resp = await gitStaticApi().get(`${relativeUrl}/git/trees/master?recursive=1`);
  return resp;
};
