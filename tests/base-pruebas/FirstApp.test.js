import { render } from '@testing-library/react';
import FirstApp from '../../src/FirstApp';
//'https://testing-library.com/docs/react-testing-library/intro' complemento para hacer testing a componentes de react;

describe('prueba a FistApp', () => {
    /*test('debe hacer match con el snapshot', () => {
        const titulo = 'Hola, soy un titulo';
        const { container } = render(<FirstApp titulo={titulo} />);
        expect(container).toMatchSnapshot();
    });*/
    /*test('debe mostrar el titulo', () => {
        //validacion de la exixtencia de la prop: titulo;
        const titulo = 'Hola, soy un titulo';
        const { getByText, getByTestId } = render(<FirstApp titulo={titulo} />);
        //expect(getByText(titulo)).toBeTruthy();
        // siguientes lineas para validar la exixtencia del titulo dentro de la etiqueta h1;
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(titulo);
        //para validar por id titulo dentro de la etiqueta;
        // .toBe valida que sea igual, sin campos, .toContain validaque este presente sin importar los anexos
        //expect(getByTestId('test-titulo').innerHTML).toContain(titulo);

    });*/
    test('validar prop: valor en n repeticiones', () => {
        const valor = 333;
        const { queryAllByText } = render(<FirstApp valor={valor} />);
        expect(queryAllByText(valor).length).toBe(3);
    });
});