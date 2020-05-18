/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const fs = require('fs');
const showdown = require('showdown');
const cheerio = require('cheerio');
const path = require('path');

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


module.exports = {
  extractLinks,
  checkText,
};
