const path = require('path')
const functions = require('../lib/path.js')
//RUTAS 1-4

const pathRelative =  'test/recurses-for-test/readme-ok.md';
const pathAbsolute =  path.resolve('test/recurses-for-test/readme-ok.md');
const pathAbsoluteDir =  path.resolve('test/recurses-for-test');
const arrPaths = [
    path.resolve('test/recurses-for-test/directory/linksProof.js'),
    path.resolve('test/recurses-for-test/directory/readmeExtra.md'),
    path.resolve('test/recurses-for-test/fileWithoutLinks.md'),
    path.resolve('test/recurses-for-test/proof.js'),
    path.resolve('test/recurses-for-test/readme-ok.md'),
    path.resolve('test/recurses-for-test/README-origin.md'),
    
  ];
const arrPathsMd = [
    path.resolve('test/recurses-for-test/directory/readmeExtra.md'),
    path.resolve('test/recurses-for-test/fileWithoutLinks.md'),
    path.resolve('test/recurses-for-test/readme-ok.md'),
    path.resolve('test/recurses-for-test/README-origin.md')
  ];
describe('funciones de ruta', () => {
  
  // 1.relativa o no
  it("dada una ruta relativa debe retornar false", () => {
    const resultProof = functions.checkPathType(pathRelative);
    expect(resultProof).toBe(false);
  });
  it("dada una ruta absoluta debe retornar true", () => {
    const resultProof = functions.checkPathType(pathAbsolute);
    expect(resultProof).toBe(true);
  });

  // 2.convertir a absoluta
  it("dada una ruta relativa debe retornar una ruta absoluta", () => {
    const resultProof = functions.convertPathRelative(pathRelative);
    expect(resultProof).toBe(pathAbsolute);
  });

  // 3. es directorio ?
  it("dada una ruta absoluta deberia retornar true si es directorio", ()=>{
    const directory = functions.isDirectory(pathAbsoluteDir);
    expect(directory).toBe(true);
  });

  // 4.ingresa al dir e imprime las rutas internas

  it("dada la ruta absoluta de un directorio deberia retornar arreglo de rutas de archivos", () => {
   // const pathAbsoluteDir =  path.resolve('test\recurses-for-test');
    const result = functions.extractFiles(pathAbsoluteDir);
    expect(result).toEqual(arrPaths);
  });

  // 5. filtrar solo md

  it("dado un arreglo de rutas de archivos deberia retornar arreglo de rutas de archivos markdown", () => {
    expect(functions.filterPathsMd(arrPaths)).toEqual(arrPathsMd);
  });

  it("dado un arreglo sin rutas markdown deberia reatornar un mensaje de error", () => {
  expect(functions.filterPathsMd([])).toEqual([])  
  });
});

   