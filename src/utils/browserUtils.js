import _ from 'lodash';

// browser level utilities


export const openLink = (link = '', blank = false) => {
  window.open(link, blank ? '_blank' : '_self');
};