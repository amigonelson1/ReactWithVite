import { render, screen } from '@testing-library/react';
import FirstApp from '../../src/FirstApp';
//'https://testing-library.com/docs/react-testing-library/intro' complemento para hacer testing a componentes de react;

describe('prueba a FistApp', () => {

    const titulo = 'Hola, soy un titulo';
    const valor = 222;

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp titulo={titulo} />);
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar mensaje: Hola, soy un titulo', () => {
        render(<FirstApp titulo={titulo} />);
        expect(screen.getAllByText(titulo)).toBeTruthy();
    });
    test('mostrar el titulo en un h1', () => {
        render(<FirstApp titulo={titulo} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(titulo);
    });
    test('mostrar prop: valor n veces', () => {
        render(<FirstApp valor={valor} />);
        expect(screen.getAllByText(valor).length).toBe(3);
    });
});