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
const extractFiles = (routeOrigin) => {
  const route = convertPathRelative(routeOrigin);
  let arrFiles = [];
  const allFilesFromPath = fs.readdirSync(route); // trae nombres de los archivos del directorio en un array,excluyendo asimismo y dir padre).
  allFilesFromPath.forEach((file) => {
    const iterativePath = path.join(route, file); // crea la ruta absoluta
    if (isDirectory(iterativePath) === false) {
      arrFiles.push(iterativePath);// recursividad para agregar solo archivos al array
    } else {
      arrFiles = arrFiles.concat(extractFiles(iterativePath)); // mete archivos al array si ya no hay otro directorio
    }
  });
  return arrFiles;
};
// 5. filtrar solo md

const filterPathsMd = (arrayPaths) => {
  let arrPathsMD = [];
  if (arrayPaths.length !== 0) {
    arrPathsMD = arrPathsMD.concat(arrayPaths.filter(((filePath) => path.extname(filePath) === '.md')));
  }
  return arrPathsMD;
};

module.exports = {
  checkPathType,
  convertPathRelative,
  isDirectory,
  extractFiles,
  filterPathsMd,
};
