/* TESTS DE PRUEBA */
import hello from '../src/index.js';
import { callbacks } from '../src/index.js';


/* TEST DE UNA FUNCION*/
describe('it should say hello', () => {
  it("should greet 'Sergio'", () => {
    expect(hello()).toBe('Hello, Sergio');
  });

  it("should greet 'Daniel'", () => {
    expect(hello('Daniel')).toBe('Hello, Daniel');
  });
});
/* TEST DE UN CALLBACK*/
describe('Asincrono - Callback', () => {
  test('Callback', done => {
      let callbackInterno = datos => {
          expect(datos).toBe('Hola mundo callback');
          done();
      };
      callbacks(callbackInterno);
  })
});
afterEach(() => console.log('Despues de cada prueba'));
