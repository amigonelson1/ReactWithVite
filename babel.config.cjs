// Este archivo debe crearse para complementar JEST y poder hacer pruebas;
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};

/*
Si tenemos el siguiente mensaje al ejecutar una prueba:
'You appear to be using a native ECMAScript module 
configuration file, which is only supported when running Babel asynchronously.'
Cambiar extensión de los archivos jest.config.js y/o babel.config.js a .cjs
*/