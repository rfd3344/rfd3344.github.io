import _ from 'lodash';

const folderMap = {
  markdown: require.context('src/../public/markdown', true),
  pdf: require.context('src/../public/pdf', true),
};

export const getFolderFiles = (folderName = '') => {
  return folderMap[folderName].keys();
};