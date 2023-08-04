import _ from 'lodash';

import { env } from 'src/core/envManager';

export const groupByRoot = (files = []) => {

  const res = _.groupBy(files, (item) => {
    const pathArr = _.split(item.path, '/');
    const rootFolder = pathArr.length > 1 ? pathArr[0] : '/';
    return rootFolder;
  });

  return res;
};


export const omitRoot = (filePath = '') => {
  const pathArr = _.split(filePath, '/');
  if (pathArr.length < 2) return pathArr[0];

  return _.slice(pathArr, 1).join('/');
};
