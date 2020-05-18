const functions = require('../lib/md-links');
const data = require('./recursosOutputs')
const {mdLinks} = require('../bin/md-linksMain')

describe('describe la funciones previas a obtener la promesa con propiedades', () => {
  it("dada el texto de cada link solo muestra los 50 primeros caracteres ", () => {
    const text= 'Ministerio de desarrollo e inclusion social del Perú'
    const cutText=  'Ministerio de desarrollo e inclusion social del Pe'
    const propText = functions.checkText(text)
    expect(propText).toBe(cutText);
  });
  it("dado una arreglo de rutas absolutas de archivos markdown retorna un arreglo links con propiedades file,href y text", () => {
    const links = functions.extractLinks(data.arrPathsMarkdown);
    expect(links).toEqual(data.arrayLinksDeafult);
  });
});
 
describe('mdLinks(path,option) deberia retornar una promesa que resuelva a un arreglo de objetos con href,text y file', () => {
  it('dada una ruta valida y una opcion invalida', done => {
    const error = new Error('invalid option')
    mdLinks('test/recurses-for-test/directory','fdgd')
      .catch(resp =>{
      expect(resp).toEqual(error)
      done();
    });
  });
  it('cada objeto con href,text y file representa un link para un directorio con ruta absoluta sin opcion', done => {
    mdLinks('C:/Users/Usuario/Desktop/recover/LIM012-fe-md-links/test/recurses-for-test/directory')
      .then(resp =>{
      expect(resp).toEqual(data.arrayLinksMdDir);
      done();
    });
  });
  it('cada objeto con href,text y file representa un link para un directorio con ruta relativa sin opcion', done => {
    mdLinks('test/recurses-for-test/directory')
      .then(resp =>{
      expect(resp).toEqual(data.arrayLinksMdDir);
      done();
    });
  });
  it('cada objeto con href,text y file representa un link para un archivo con ruta relativa sin opcion', done => {
    mdLinks('test/recurses-for-test/directory/readmeExtra.md')
      .then(resp =>{
      expect(resp).toEqual(data.arrayLinksMdFile);
      done();
    });
  });
  it('cada objeto con href,text,file,status y statusText representa un link para un directorio con ruta relativa con opcion', done => {
    mdLinks('test/recurses-for-test/directory', { validate: true})
      .then(resp =>{
      expect(resp).toEqual(data.arrayLinksMdDirValidate);
      done();
    });
  });
  it('cada objeto con href,text,file,status y statusText representa un link para un archivo con ruta relativa con opcion', done => {
    mdLinks('test/recurses-for-test/directory/readmeExtra.md', { validate: true})
      .then(resp =>{
      expect(resp).toEqual(data.arrayLinksMdFileValidate);
      done();
    });
  });
});
