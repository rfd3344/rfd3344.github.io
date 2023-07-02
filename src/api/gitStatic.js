import _ from 'lodash';

import {
  createInstance,
  gitStaticApi,
} from './api';


import { masterMock } from './gitStaticMock';

export const getMasterTree = async () => {
  // return masterMock;
  const resp = await gitStaticApi().get('trees/master?recursive=1');
  return resp;
};


// export const getResource = async (url = '') => {
//   return {};
//   const resp = await createInstance({ baseURL: url }).get();
//   return resp;
// };