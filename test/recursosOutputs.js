const path = require('path');
const arrPathsMarkdown = [
    path.resolve('test/recurses-for-test/directory/readmeExtra.md'),
    path.resolve('test/recurses-for-test/readme-ok.md'),
  ];
const arrayLinksDeafult=[
    {
      file: './readmeExtra.md',
      href: 'https://github.com/GoogleCloudPlatform',
      text: 'GoogleCloudPlatform'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.meteor.com/',
      text: 'Meteor'
    },
    {
      file: './readmeExtra.md',
      href: 'http://stackexchange.com/',
      text: 'Stackexchange'
    },
    {
      file: './readmeExtra.md',
      href: 'https://code.google.com/p/pagedown/',
      text: 'PageDown'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/Vertafore/docular',
      text: 'docular'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/oscarmorrison/md-page',
      text: 'md-page'
    },
    {
      file: './readmeExtra.md',
      href: 'https://qcobjects.dev',
      text: 'QCObjects'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/node-fetch/node-fetch/blob/HEAD/ERROR-HANDLING.md',    text: 'errores'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.cp',
      text: 'error link'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.npmjs.com/browse/depended/showdown',
      text: 'and some others…'
    },
    {
      file: './readmeExtra.md',
      href: 'bjijonvg',
      text: 'this is an error'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/showdownjs/showdown/issues/114',
      text: 'this issue'
    },
    {
      file: './readme-ok.md',
      href: 'https://www.theodysseyonline.com/road-trips-worthwhile',
      text: 'Fuente'
    },
    {
      file: './readme-ok.md',
      href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API',
      text: 'fetch'
    },
    {
      file: './readme-ok.md',
      href: 'https://www.chartjs.org/',
      text: 'Chart.js'
    },
    {
      file: './readme-ok.md',
      href: 'https://developers.google.com/chart/',
      text: 'Google Charts'
    },
    {
      file: './readme-ok.md',
      href: 'https://es.wikipedia.org/wiki/Refactorizaci%C3%B3n',
      text: 'Refactoriza'
    },
    {
      file: './readme-ok.md',
      href: 'https://github.com/Laboratoria/lim-2018-11-bc-core-am-data-lovers.git',
      text: 'git pull'
    }
  ]
const arrayLinksMdDir=[
    {
      file: './readmeExtra.md',
      href: 'https://github.com/GoogleCloudPlatform',
      text: 'GoogleCloudPlatform'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.meteor.com/',
      text: 'Meteor'
    },
    {
      file: './readmeExtra.md',
      href: 'http://stackexchange.com/',
      text: 'Stackexchange'
    },
    {
      file: './readmeExtra.md',
      href: 'https://code.google.com/p/pagedown/',
      text: 'PageDown'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/Vertafore/docular',
      text: 'docular'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/oscarmorrison/md-page',
      text: 'md-page'
    },
    {
      file: './readmeExtra.md',
      href: 'https://qcobjects.dev',
      text: 'QCObjects'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/node-fetch/node-fetch/blob/HEAD/ERROR-HANDLING.md',    text: 'errores'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.cp',
      text: 'error link'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.npmjs.com/browse/depended/showdown',
      text: 'and some others…'
    },
    {
      file: './readmeExtra.md',
      href: 'bjijonvg',
      text: 'this is an error'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/showdownjs/showdown/issues/114',
      text: 'this issue'
    }
  ]
 
  const arrayLinksMdFile=[
    {
      file: './readmeExtra.md',
      href: 'https://github.com/GoogleCloudPlatform',
      text: 'GoogleCloudPlatform'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.meteor.com/',
      text: 'Meteor'
    },
    {
      file: './readmeExtra.md',
      href: 'http://stackexchange.com/',
      text: 'Stackexchange'
    },
    {
      file: './readmeExtra.md',
      href: 'https://code.google.com/p/pagedown/',
      text: 'PageDown'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/Vertafore/docular',
      text: 'docular'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/oscarmorrison/md-page',
      text: 'md-page'
    },
    {
      file: './readmeExtra.md',
      href: 'https://qcobjects.dev',
      text: 'QCObjects'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/node-fetch/node-fetch/blob/HEAD/ERROR-HANDLING.md',    text: 'errores'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.cp',
      text: 'error link'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.npmjs.com/browse/depended/showdown',
      text: 'and some others…'
    },
    {
      file: './readmeExtra.md',
      href: 'bjijonvg',
      text: 'this is an error'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/showdownjs/showdown/issues/114',
      text: 'this issue'
    }
  ]
  const arrayLinksMdDirValidate =[
    {
      file: './readmeExtra.md',
      href: 'https://github.com/GoogleCloudPlatform',
      text: 'GoogleCloudPlatform',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.meteor.com/',
      text: 'Meteor',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'http://stackexchange.com/',
      text: 'Stackexchange',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://code.google.com/p/pagedown/',
      text: 'PageDown',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/Vertafore/docular',
      text: 'docular',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/oscarmorrison/md-page',
      text: 'md-page',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://qcobjects.dev',
      text: 'QCObjects',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/node-fetch/node-fetch/blob/HEAD/ERROR-HANDLING.md',    text: 'errores',
      status: 404,
      statusText: 'Not Found'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.cp',
      text: 'error link',
      status: 400,
      statusText: 'Bad Request'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.npmjs.com/browse/depended/showdown',
      text: 'and some others…',
      status: 200,
      statusText: 'OK'
    }, 
    {
      file: "./readmeExtra.md",
      href: "bjijonvg",
      status: '',
      statusText: 'FAIL',
      text: "this is an error",
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/showdownjs/showdown/issues/114',
      text: 'this issue',
      status: 200,
      statusText: 'OK'
    }
  ]
  const arrayLinksMdFileValidate = [
    {
      file: './readmeExtra.md',
      href: 'https://github.com/GoogleCloudPlatform',
      text: 'GoogleCloudPlatform',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.meteor.com/',
      text: 'Meteor',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'http://stackexchange.com/',
      text: 'Stackexchange',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://code.google.com/p/pagedown/',
      text: 'PageDown',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/Vertafore/docular',
      text: 'docular',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/oscarmorrison/md-page',
      text: 'md-page',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://qcobjects.dev',
      text: 'QCObjects',
      status: 200,
      statusText: 'OK'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/node-fetch/node-fetch/blob/HEAD/ERROR-HANDLING.md',    text: 'errores',
      status: 404,
      statusText: 'Not Found'
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.cp',
      text: 'error link',
      status: 400,
      statusText: 'Bad Request'
    },
    {
      file: './readmeExtra.md',
      href: 'https://www.npmjs.com/browse/depended/showdown',
      text: 'and some others…',
      status: 200,
      statusText: 'OK'
    },
    {
      file: "./readmeExtra.md",
      href: "bjijonvg",
      status: '',
      statusText: 'FAIL',
      text: "this is an error",
    },
    {
      file: './readmeExtra.md',
      href: 'https://github.com/showdownjs/showdown/issues/114',
      text: 'this issue',
      status: 200,
      statusText: 'OK'
    }
  ]
module.exports = {
    arrPathsMarkdown,
    arrayLinksDeafult,
    arrayLinksMdDir,
    arrayLinksMdFile,
    arrayLinksMdDirValidate,
    arrayLinksMdFileValidate,
}