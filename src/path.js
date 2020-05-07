/* eslint-disable max-len */
// const a = `${process.cwd()}\\test\\recurses-for-test\\readme-ok.md`;
// console.log(1 + a);
// const g = path.join(`${__dirname}`, '/recurses-for-test/readme-ok.md');
// console.log(2 + g);
// const r = path.resolve('test/recurses-for-test/readme-ok.md');
// console.log(3 + r);

const path = require('path');
const fs = require('fs');

// 1.relativa o no
const checkPathType = (ruta) => path.isAbsolute(ruta);

// 2.convertir a absoluta
const convertPathRelative = (ruta) => {
  if (checkPathType(ruta) === false) {
    return path.resolve(ruta);
  }
  return ruta;
};


// 3. es directorio ?

const isDirectory = (ruta) => {
  const pathValite = fs.statSync(ruta); // verificar la existencia
  return pathValite.isDirectory(); // verificar directorio
};


// 4.ingresa al dir e imprime las rutas internas
const extractFiles = (rutaOriginal) => {
  const ruta = convertPathRelative(rutaOriginal);
  let arrFiles = [];
  const allFilesFromPath = fs.readdirSync(ruta); // lee archivos
  allFilesFromPath.forEach((file) => {
    const iterativePath = path.join(ruta, file); // crea la ruta absoluta
    if (isDirectory(iterativePath)) {
      arrFiles = arrFiles.concat(extractFiles(iterativePath)); // recursividad para agregar solo archivos al array
    } else {
      arrFiles.push(iterativePath);// mete archivos al array si ya no hay otro directorio
    }
  });
  return arrFiles;
};
// 5. filtrar solo md

const filterPathsMd = (arrayPaths) => {
  let arrMD = [];
  if (arrayPaths.length !== 0) {
    arrMD = arrMD.concat(arrayPaths.filter(((filePath) => path.extname(filePath) === '.md')));
  } else {
    return 'no se encontro archivos markdown';
  }
  return arrMD;
};

module.exports = {
  checkPathType,
  convertPathRelative,
  isDirectory,
  extractFiles,
  filterPathsMd,
};
