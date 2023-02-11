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

function FirstApp() {

    return (
        <>
            <h1>FirstApp {titulo}</h1>
            <p>Este es un párrafo.</p>
            <p>{arreglo}</p>
            <code>{JSON.stringify(objeto)}</code>
            <p>{suma()}</p>
        </>
    )
}

export default FirstApp