import PropTypes from 'prop-types'; //Este importe es para capturar y devolver errores en las props types

//***** si no dependen del funcional component se recomienda dejar por fuera*****/

const titulo = 'Título'; // constantes fuera del funcional componente evita sobrecarga de lectura
const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //se pueden pasar arreglos, pero NO objetos
const objeto = {
    nombre: 'Pepe',
    edad: 35,
};// para poder imprimir debemos usar JSON.stringify(objeto)

const suma = () => {
    return 2 + 3;
};

function FirstApp({ titulo, valor }) {

    return (
        <>
            <h1>first App, {titulo} con valor de {valor}</h1>
            <p>Este es un párrafo.</p>
            <p>{arreglo}</p>
            <code>{JSON.stringify(objeto)}</code>
            <p>{suma()}</p>
        </>
    )
};

//A continuacion se le asignan los tipos de valores y si son requeridos, en caso de no recibir alguno mostrara error en consola;
// se debe usar el nombre del componenete .propTypes;
FirstApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
};

//forma de asignar default props en el componenete es .defaultProps
FirstApp.defaultProps = {
    titulo: 'Soy el título por defecto',
    valor: 1,
    nombre: 'soy el nombre por defecto',
}

export default FirstApp