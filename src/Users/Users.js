import React, {useState, useEffect, Fragment} from 'react';
import ReactDOM from 'react-dom';

function Increment() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json));

        return () => {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(json => setUsers(json))
        }
    }, []);

    const closeComponent = () => {
        //Forçar a finalização do componente
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    };

    return (
        <div>
            {users && users.length > 1 && users.map((user, key) => {
                return (
                    <Fragment key={key}>
                        <span>{user.name}</span>
                        <hr/>
                    </Fragment>
                )
            })}

            {
                users.length === 1 && <span>{users.name}</span>
            }

            <button onClick={() => closeComponent()}>Finalizar Componente</button>
        </div>
    );
}

export default Increment;
