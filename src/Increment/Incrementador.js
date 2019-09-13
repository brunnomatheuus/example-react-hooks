import React, {useContext} from 'react';
import {IncrementadorGeral} from './Increment.js';
import Visualizador from './Visualizador';

function Incrementador () {
    const { count, setCount } = useContext(IncrementadorGeral);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Incrementar Valor</button>
            <Visualizador />
        </div>
    )
}

export default Incrementador;