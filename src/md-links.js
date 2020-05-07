/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const fs = require('fs');
const showdown = require('showdown');
const cheerio = require('cheerio');
const path = require('path');
const fetch = require('node-fetch');
const {
  convertPathRelative, isDirectory, extractFiles, filterPathsMd,
} = require('./path.js');

const checkText = (text) => text.substring(0, 50);

//  simplifiedAutoLink habilitará el enlace automático a las URL
const extractLinks = (arr) => {
  let propForLink = [];
  arr.forEach((fileMD) => {
    const getData = (pathMain, callback) => callback(fs.readFileSync(pathMain, 'utf8'));
    const converterHtml = (datos) => new showdown.Converter([{ simplifiedAutoLink: 'true' }]).makeHtml(datos);
    const datosHTML = getData(fileMD, converterHtml);
    const propertiesBasicForLink = (baseDates) => {
      let propertiesLinksFound = [];
      const $ = cheerio.load(baseDates);
      $('a').each((i, el) => {
        const eachLink = {
          file: `./${path.basename(fileMD)}`,
          href: $(el).attr('href'),
          text: checkText($(el).text()),
        };
        propertiesLinksFound = propertiesLinksFound.concat(eachLink);
      });
      return propertiesLinksFound;
    };
    propForLink = propForLink.concat(propertiesBasicForLink(datosHTML));
  });
  return propForLink;
};

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
// const show = (command) => command.then((resp) => console.log(resp));
// // return Promise.all(urlValidate(extractLinks(arrPathsMarkdown))).then((resp) => console.log(resp));
// show(urlValidate(arrayLinksDeafult));


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

// const show = (command) => command.then((resp) => console.log(resp));
 // show(mdLinks('test/recurses-for-test/directory/', { validate: true }));
// show(mdLinks('test/recurses-for-test/directory/readmeExtra.md', { validate: true }));

module.exports = {
  extractLinks,
  checkText,
  urlValidate,
  mdLinks,
};
