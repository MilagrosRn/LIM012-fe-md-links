/* eslint-disable max-len */
const { extractLinks } = require('../lib/md-links');
const {
  checkPathType, convertPathRelative, isDirectory, extractFiles, filterPathsMd,
} = require('../lib/path.js');
const { urlValidate } = require('../lib/urlValidate');

const mdLinks = (route, options) => new Promise((resolve) => {
  let arrPaths = [];
  const absolutePath = checkPathType(route) ? (route) : convertPathRelative(route);
  const checkDirectory = (isDirectory(absolutePath)) ? extractFiles(absolutePath) : ([absolutePath]);
  arrPaths = arrPaths.concat(checkDirectory);
  if (!options.validate) {
    resolve(extractLinks(filterPathsMd(arrPaths)));
  } else {
    resolve((urlValidate(extractLinks(filterPathsMd(arrPaths)))));
  }
}).then((resp) => (resp));

module.exports = {
  mdLinks,
};
