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
  // return blobToBase64(blob);
  // if (!blob) return;
  // return URL.createObjectURL(blob);
  return 'data:image/bmp;base64,' + blob;
};

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export const openFile = (blob) => {
  // var fileURL = window.URL.createObjectURL(blob);
  const decode = base64ToBytes(blob)
  var fileURL = window.URL.createObjectURL(new Blob(decode, {type: "image/png"}));
  window.open(fileURL, '_blank');
  // let tab = window.open();
  // tab.location.href = fileURL;
};


function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}