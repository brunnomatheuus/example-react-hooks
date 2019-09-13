import React, {useEffect, useState} from 'react';
import Incrementador from './Incrementador.js';

export const IncrementadorGeral = React.createContext();

function Increment() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes.`
    }, [count]);

    return (
        <IncrementadorGeral.Provider value={{ count, setCount }}>
            <Incrementador />
        </IncrementadorGeral.Provider>
    );
}

export default Increment;
