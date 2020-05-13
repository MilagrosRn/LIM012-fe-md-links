const functions = require('../lib/cli.js')

const arr = [
  {
    file: './fileWithoutLinks.md',
    href: 'https://www.npmjs.com/browse/depended/showdown',       
    text: 'and some others…',
    status: 200,
    statusText: 'OK'
  },
  {
    file: './fileWithoutLinks.md',
    href: 'https://www.npmjs.com/browse/depended/showdown',       
    text: 'and some others…',
    status: 200,
    statusText: 'OK'
  },
  {
    file: './fileWithoutLinks.md',
    href: '',
    text: 'TEXTO',
    status: '',
    statusText: 'FAIL'
  },
  {
    file: './fileWithoutLinks.md',
    href: '',
    text: 'perdido',
    status: '',
    statusText: 'FAIL'
  }
]
describe('opciones stats y stats-vaidate', () => {
  it('Debería retornar un objeto con cantiad de links totales y unicos',()=>{
    const links = ['https://www.wikipedia.com/','https://www.wikipedia.com/','http://www.midis.go.pe']
    const valueStats= {"TOTAL": 3, "UNIQUE": 1}
    expect(functions.stats(links)).toEqual(valueStats);
  });

  it('Debería retornar un objeto con cantiad de links totales, unicos y rotos', done=>{
    const links = ['https://www.wikipedia.com/','https://www.wikipedia.com/','http://www.midis.go.pe','https://github.cp']
    const valueStatsValidate = {"TOTAL": 4, "UNIQUE": 2, "BROKEN": 2 }
    expect(functions.statsValidate(arr)).toEqual(valueStatsValidate);
    done()
  });
});