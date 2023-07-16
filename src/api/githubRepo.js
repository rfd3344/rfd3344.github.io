import _ from 'lodash';

import { env } from 'src/core/envManager';
import { createInstance } from './api';

export const gitStaticApi = (config) => {
  const instance = createInstance({
    baseURL: env().REACT_APP_GITHUB_API,
  });

  return instance;
};


export const getMasterTree = async (repoPath = '') => {
  const resp = await gitStaticApi().get(`${repoPath}/git/trees/master?recursive=1`);
  return resp;
};
