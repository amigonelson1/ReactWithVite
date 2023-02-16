import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../../src/CounterApp';

describe('prueba a counter app', () => {

    const valorInicial = 100;

    test('prueba snapshot', () => {
        const { container } = render(<CounterApp value={valorInicial} />);
        expect(container).toMatchSnapshot();
    });

    test('prueba valor inicial de 100', () => {
        render(<CounterApp value={valorInicial} />);
        expect(screen.getByText(valorInicial)).toBeTruthy();
    });

    //prueba para accion clic en botones por nombre visible en pantalla;
    test('incrementa valor al dar clic en +1', () => {
        render(<CounterApp value={valorInicial} />);
        fireEvent.click( screen.getByText('+1') );// '+1' es como apareece el boton en pantalla;
        //screen.debug();// muestra un screen en el log;
        expect(screen.getByText('101')).toBeTruthy();
    });

    //prueba para accion clic en botones identificandolo por su aria-label;
    test('Decrementa valor al dar clic en -1', () => {
        render(<CounterApp value={valorInicial} />);
        fireEvent.click(screen.getByRole('button',{name: 'reset-btn'}));
        expect(screen.getByText('99')).toBeTruthy();
    });
});