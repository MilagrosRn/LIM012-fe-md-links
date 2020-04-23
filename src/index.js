/* funcion de prueba */

function hello(name = 'Sergio') {
  return `Hello, ${name}`;
}

export default hello;
// callback de prueba
export const callbacks = (callback) => {
  setTimeout(() => callback('Hola mundo callback'), 3000);
};

// probando require
const add = require('./md-links');

console.log(add(4, 5));
