/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const fs = require('fs');
const showdown = require('showdown');
const cheerio = require('cheerio');
const path = require('path');
const {
  checkPathType, convertPathRelative, isDirectory, extractFiles, filterPathsMd,
} = require('./path.js');
const { urlValidate } = require('./urlValidate.js');

const checkText = (text) => text.substring(0, 50);

//  simplifiedAutoLink habilitará el enlace automático a las URL
const propertiesBasicForLink = (baseDates, file) => {
  let propertiesLinksFound = [];
  const $ = cheerio.load(baseDates);
  $('a').each((i, el) => {
    const eachLink = {
      file: `./${path.basename(file)}`,
      href: $(el).attr('href'),
      text: checkText($(el).text()),
    };
    propertiesLinksFound = propertiesLinksFound.concat(eachLink);
  });
  return propertiesLinksFound;
};


const extractLinks = (arr) => {
  let propForLink = [];
  arr.forEach((fileMD) => {
    const getData = (pathMain, callback) => callback(fs.readFileSync(pathMain, 'utf8'));
    const converterHtml = (datos) => new showdown.Converter([{ simplifiedAutoLink: 'true' }]).makeHtml(datos);
    const datosHTML = getData(fileMD, converterHtml);
    propForLink = propForLink.concat(propertiesBasicForLink(datosHTML, fileMD));
  });
  return propForLink;
};


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
  extractLinks,
  checkText,
  urlValidate,
  mdLinks,
};
