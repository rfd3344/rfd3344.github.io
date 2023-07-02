import _ from 'lodash';

import { FileTypeEnum } from 'src/constants/fileConst';

export const getFileTyle = (fileName = '') => {
  const fileExtension = fileName.split('.').pop();

  if (fileExtension === 'pdf') {
    return FileTypeEnum.pdf;
  } else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
    return FileTypeEnum.image;
  }


  return FileTypeEnum.others;
};
