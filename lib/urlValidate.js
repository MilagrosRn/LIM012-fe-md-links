/* eslint-disable no-param-reassign */

const fetch = require('node-fetch');

const urlValidate = (arr) => {
  const links = arr.map((eachLinkIntoArray) => new Promise((resolve) => {
    const promise = fetch(eachLinkIntoArray.href);
    promise
      .then((data) => {
        eachLinkIntoArray.status = data.status;
        eachLinkIntoArray.statusText = data.statusText;
        resolve((eachLinkIntoArray));
      })
      .catch((err) => {
        eachLinkIntoArray.status = '';
        eachLinkIntoArray.statusText = 'FAIL';
        resolve((eachLinkIntoArray));
      });
  }));
  return Promise.all(links).then((resp) => (resp));
};
module.exports = {
  urlValidate,
};
