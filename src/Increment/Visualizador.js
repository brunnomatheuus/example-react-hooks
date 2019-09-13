import React, {useContext} from 'react';
import {IncrementadorGeral} from './Increment.js';

function Visualizador () {
    const { count } = useContext(IncrementadorGeral);

    return (
        <div>
            <span>Valor = {count}</span>
        </div>
    )
}

export default Visualizador;