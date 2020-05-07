const { extractLinks, urlValidate } = require('../src/md-links');
const {
  convertPathRelative, isDirectory, extractFiles, filterPathsMd,
} = require('../src/path.js');

const mdLinks = (pathi, options) => new Promise((resolve) => {
  let arrPaths = [];
  const rutaAbsoluta = convertPathRelative(pathi);
  if (isDirectory(rutaAbsoluta)) {
    arrPaths = arrPaths.concat(extractFiles(rutaAbsoluta));
  } else {
    arrPaths = arrPaths.concat([rutaAbsoluta]);
  }
  if (!options.validate) {
    resolve(extractLinks(filterPathsMd(arrPaths)));
  } else {
    resolve((urlValidate(extractLinks(filterPathsMd(arrPaths)))));
  }
}).then((resp) => (resp));

module.exports = {
  mdLinks,
};
