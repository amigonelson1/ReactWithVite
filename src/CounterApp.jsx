import { useState } from 'react';
import PropsType from 'prop-types';

//guia de eventos: 'https://es.reactjs.org/docs/events.html';
// hooks de react: 'https://es.reactjs.org/docs/hooks-intro.html';

function CounterApp({ value }) {

    const [counter, setCounter] = useState(value)

    const handledAdd = () => {
        setCounter(counter + 1);
        // para cambiar varias veces en un mismo evento seteamos con una funcion interna;
        /*
        setCounter(counter=> counter+1);
        setCounter(counter=> counter+1);
        */
    };

    const handledsubstract = () => {
        setCounter(counter - 1);
    };

    const handledReset = () => {
        setCounter(value);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handledAdd}>+1</button>
            <button aria-label='reset-btn' onClick={handledsubstract}>-1</button>
            <button onClick={handledReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropsType.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}

export default CounterApp