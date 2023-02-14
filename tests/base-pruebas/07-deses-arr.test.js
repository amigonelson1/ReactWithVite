import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

//

describe('prueba 07-desestructuracion de arrays', () => {
    test('Se esperan tipos de datos iguales', () => {
        const [letras, numeros] = retornaArreglo(); // desestructuramos para comprobar
        // existen dos formas, la 1a es validando en tipo. 'typeof';
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

        //otra manera:
        expect(letras).toEqual(expect.any(String));
        expect(numeros).toEqual(expect.any(Number));
    })
});