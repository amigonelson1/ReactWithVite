//Este archivo es para configuraciones de Jest y versiones de node inferiores a la 18;

module.exports = {
    //TODO: jsdom,
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}