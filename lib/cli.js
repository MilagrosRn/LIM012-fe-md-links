/* eslint-disable max-len */
const stats = (arr) => {
  const cant = arr.length;
  const noRepete = [...new Set(arr.map((ele) => ele.href))].length;
  return {
    TOTAL: cant,
    UNIQUE: noRepete,
  };
};
const statsValidate = (arr) => {
  const statsNew = stats(arr);
  statsNew.BROKEN = arr.filter((link) => link.status >= 400 || link.statusText === 'FAIL').length;
  return statsNew;
};

// console.log((statsValidate(arrMuestra)));
// (mdLinks('test/recurses-for-test/fileWithoutLinks.md', { validate: true })).then((resp) => console.log((resp)));

module.exports = {
  stats,
  statsValidate,
};
