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

export const getMarkdownFiles = async () => {
  const resp = await gitStaticApi().get(`rfd3344/rfd3344.github.io/git/trees/63284f642f2ba4300fde01aa43e7426265856000?recursive=1`);
  return resp;
};
// https://api.github.com/repos/rfd3344/rfd3344.github.io/git/trees/63284f642f2ba4300fde01aa43e7426265856000?recursive=1