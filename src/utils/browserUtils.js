import _ from 'lodash';

// browser level utilities


export const openBlankLink = (link = '') => {
  window.open(link, '_blank');
};