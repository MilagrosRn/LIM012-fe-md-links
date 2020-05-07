/*fetch('https://github.com/')
  .then((data) => {
    console.log( typeof data.status);
    console.log(typeof data.statusText);
  });


const promise = new Promise(((resolve) => {
    resolve('done!');
}));


const exitoCallback = (result) => console.log(`minnnnhbh${result}`);
const falloCallback = (error) => console.log(error);
promise.then(exitoCallback, falloCallback);


fetch('https://github.com/')
  .then((data) => {
    console.log('data = ', data);
  })
  .catch((err) => {
    console.error(err);
  });

  -------------------
  const mdLinks = (pathi, options) => {
  let armi = [];
  let rutaAbsoluta = '';
  if (checkPathType(pathi)) {
    rutaAbsoluta = pathi;
  } else {
    rutaAbsoluta = convertPathRelative(pathi);
  } if (isDirectory(rutaAbsoluta)) {
    armi = armi.concat(extractFiles(rutaAbsoluta));
  } else {
    armi = armi.concat([rutaAbsoluta]);
  }
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(extractLinks(filterPathsMd(armi)));
    } else {
      resolve(Promise.all(urlValidate(extractLinks(filterPathsMd(armi)))));
    }
  }).then((resp) => console.log(resp));
};
// (mdLinks('test/recurses-for-test/directory', { validate: false }));
----------------
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


const arrPathsMarkdown = [
  path.resolve('test/recurses-for-test/directory/readmeExtra.md'),
  path.resolve('test/recurses-for-test/readme-ok.md'),
];
const ami = (extractLinks(arrPathsMarkdown));


const urlValidate = (arr) => arr.map((eachLinkIntoArray) => new Promise((resolve, reject) => {
  const promise = fetch(eachLinkIntoArray.href);
  promise
    .then((data) => {
      eachLinkIntoArray.status = data.status;
      eachLinkIntoArray.statusText = data.statusText;
      resolve((eachLinkIntoArray));
    })
    .catch((err) => {
      eachLinkIntoArray.status = '';
      eachLinkIntoArray.statusText = 'NOT FOUND';
      resolve((eachLinkIntoArray));
      reject(err);
    });
}).then((resp) => console.log(resp)));

// (urlValidate(ami)); 
// Promise.all(urlValidate(arrayOficial)).then((resp) => console.log(resp));

*//*test
--------------------------------

// describe('mdLinks(path,option', () => {
//   it('deberia retornar una promesa que resuelva a un arreglo de objetos con href,text y file, cada objeto representa un link para un directorio', done => {
//     const response = (functions.mdLinks('test/recurses-for-test/directory', { validate: false}));
//      response.then(resp =>{
//       expect(resp).toEqual(data.arrMDLinksDir);
//     });
//   // expect(Promise.resolve(response)).resolves.toEqual(data.arrMDLinks);
//    done();
//   });

//   it('deberia retornar una promesa que resuelva a un arreglo de objetos con href,text y file, cada objeto representa un link para un archivo', done => {
//     const response = (functions.mdLinks('test/recurses-for-test/directory/readmeExtra.md', { validate: false}));
//      response.then(resp =>{
//       expect(resp).toEqual(data.arrMDLinksFile);
//     });
//     done();
//   });

//   it('deberia retornar una promesa que resuelva a un arreglo de objetos con href,text,file,status y statusText cada objeto representa un link', done => {
//     const response = (functions.mdLinks('test/recurses-for-test/directory', { validate: true}));
//     response.then(resp =>{
//       expect(resp).toContain(data.arrMDLinksCompleteDir);
//     });
//     done();
//   });

//   it('deberia retornar una promesa que resuelva a un arreglo de objetos con href,text,file,status y statusText cada objeto representa un link', done => {
//     const response = (functions.mdLinks('test/recurses-for-test/directory/readmeExtra.md', { validate: true}));
//     response.then(resp =>{
//       expect(resp).toEqual(data.arrMDLinksCompleteFile);
//     });
//     done();
// });
  // it('deberia retornar una promesa que resuelva a un arreglo de objetos con href,text y file,cada objeto representa un link', () => {
    
    
  //   return expect(functions.mdLinks(pathAbsoluteWithoutLinks,{validate :false})).rejects.toEqual([])
  // });


  // it('deberia retornar una promesa que resuelva a un arreglo de objetos con href,text y file,cada objeto representa un link', () => {
  //   return expect(functions.mdLinks(pathAbsoluteWithoutLinks,{validate :true})).rejects.toEqual([])
  // });

});
*/
