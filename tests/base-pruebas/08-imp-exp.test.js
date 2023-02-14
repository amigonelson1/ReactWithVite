import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('test a 08 importe y exporte', () => {
    test('llamado a herore por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('Prueba cuando no se encuentra id', () => {
        const heroe = getHeroeById(100);
        //para comparar un resultado con un undefined o null, se puede de cualquiera de las dos formas siguientes;
        expect(heroe).toBe(undefined);
        expect(heroe).toBeFalsy();
    });

    test('Prueba para buscar por owner', () => {
        const ownerDc = 'DC';
        const ownerMarvel = 'Marvel';
        const dcComics =  [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
        const heroesDc = getHeroesByOwner(ownerDc);
        const heroesMv = getHeroesByOwner(ownerMarvel);
        expect(heroesDc.length).toBe(3);
        expect(heroesDc).toEqual(dcComics);
        expect(heroesMv.length).toBe(2);
    });
});
