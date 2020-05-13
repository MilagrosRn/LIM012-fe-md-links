const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});
fetchMock
  .mock('https://github.com/node-fetch/node-fetch/blob/HEAD/ERROR-HANDLING.md', 404)
  .mock('https://github.cp', 400)
  .mock('bjijonvg', { throws: new Error('FAIL') })
  .mock('*', 200);

module.exports = fetchMock;
