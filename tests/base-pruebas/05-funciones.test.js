import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';
//con .toEqual para evaluar objetos iguales;

describe('test de 05-funciones', () => {
    test('debera retornar un objeto', () => {
        const objeto = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const peticion = getUser();
        expect(objeto).toEqual(peticion);
    });

    test('test 2 llamado del segundo arreglo', () => {
        const nombre = 'Fernando';
        const user = {
            uid: 'ABC567',
            username: nombre
        };
        const userActive = getUsuarioActivo(nombre);
        expect(user).toEqual(userActive);
    });
});