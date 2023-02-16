import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
// usamos el done() para funciones asincronas
// debemos agregar al package.jason: ' --detectOpenHandles', para evitar advertencias de fugas;
// quedaria el scrip de la siguiente forma: '"test": "jest --watchAll --detectOpenHandles"';

describe('Prueba a 09-promesas', () => {
    test('test de .then', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(respuesta => {
                expect(respuesta).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
            });
        done();
    });
    test('test de .catch', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`)
            });
        done();
    });
});