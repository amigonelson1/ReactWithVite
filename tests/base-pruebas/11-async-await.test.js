import { getImagen } from '../../src/base-pruebas/11-async-await';

// usando async;
describe('prueba 11-async-await', () => {
    test('llamado a url', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});

/*Para versiones anteriores a node 18 dara error; debemos crear y configurar dos archivos mas;
Esto es con JEST
En la raiz del proyecto creamos un archivo 'jest.config.js o jest.config.cjs' y 'jest.setup.js';

Instalamos el paquete: 'yarn add -D whatwg-fetch';
Instalamos el paquete: 'yarn add -D isomorphic-fetch' en caso de tener inconvenientes con el anterior paquete y
no se hagan las peticiones fetch;
*/