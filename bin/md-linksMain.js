/* eslint-disable max-len */
const { extractLinks } = require('../lib/md-links');
const {
  checkPathType, convertPathRelative, isDirectory, extractFiles, filterPathsMd,
} = require('../lib/path.js');
const { urlValidate } = require('../lib/urlValidate');

const mdLinks = (route, options) => new Promise((resolve, reject) => {
  let arrPaths = [];
  const absolutePath = checkPathType(route) ? (route) : convertPathRelative(route);
  const checkDirectory = (isDirectory(absolutePath)) ? extractFiles(absolutePath) : ([absolutePath]);
  arrPaths = arrPaths.concat(checkDirectory);
  if (options) {
    if (options.validate) {
      resolve((urlValidate(extractLinks(filterPathsMd(arrPaths)))));
    } else {
      reject(new Error('invalid option'));
    }
  } else {
    resolve(((extractLinks(filterPathsMd(arrPaths)))));
  }
});

module.exports = {
  mdLinks,
};
