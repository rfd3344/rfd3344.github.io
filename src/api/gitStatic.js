import _ from 'lodash';

import { gitStaticApi } from './api';


export const getMasterTree = async () => {
  const resp = await gitStaticApi().get('trees/master');
  return resp;
};