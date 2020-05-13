/* eslint-disable max-len */
const path = require('path');
const fs = require('fs');

// 1.relativa o no
const checkPathType = (route) => path.isAbsolute(route);
// 2.convertir a absoluta
const convertPathRelative = (route) => ((checkPathType(route) === false) ? path.resolve(route) : route);

// 3. es directorio ?
const isDirectory = (route) => fs.statSync(route).isDirectory();

// 4.ingresa al dir e imprime las rutas internas
const extractFiles = (rutaOriginal) => {
  const ruta = convertPathRelative(rutaOriginal);
  let arrFiles = [];
  const allFilesFromPath = fs.readdirSync(ruta); // trae nombres de los archivos del directorio en un array,excluyendo asimismo y dir padre).
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
