/*para hacer test podemos usar: 'https://jestjs.io/', lo instalamos  
y en el package.json dentro de scripts agregamos: '"test": "jest --watchAll"', el --watchAll es para permanecer en escucha;
instalamos tambien una dependencia que nos ayuda a ver o autocompletar comandos de jest:'yarn add -D @types/jest';
Instalamos tambien: 'yarn add --dev babel-jest @babel/core @babel/preset-env' para lecturas modernas de js;
Se debe crear un archivo:'babel.config.js' en la raiz del proyecto y configurarse;
*/

describe('Pruebas en <demoComponent/>', () => {
    test('Esta prueba no debe fallar', () => {
        //1.inicializacion
        const mensaje1 = 'Hola mundo';
        //2. estimulo
        const mensaje2 = mensaje1.trim();
        //3.observar el comportamiento... esperado
        expect(mensaje1).toBe(mensaje2);
    });
});