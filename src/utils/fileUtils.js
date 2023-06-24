import _ from 'lodash';

// browser level utilities
export const getFileTyle = (fileName = '') => {
  const res = fileName.split('.').pop();
  return _.lowerCase(res);


};

export const isImageFile = (fileName = '') => {
  const imageExtensions = ['jpg', 'jpeg', 'png'];

  return imageExtensions.includes(getFileTyle(fileName));

};

export const blobToImage = (blob) => {
  return blobToBase64(blob);
  if (!blob) return;
  return URL.createObjectURL(blob);
  // return 'data:image/bmp;base64,' + Base64.encode(blob);
};

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}