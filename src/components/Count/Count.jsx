import React, { useState } from 'react';

const Count = ({ initial, stock }) => {

    let [counter, setCounter] = useState(initial)

    const Incrementar = () => {
        if (counter < stock) {
            setCounter(counter++)

        }


    }

    const Decrementar = () => {
        if (counter > 1) {
            setCounter(counter--)

        }


    }


    return (
        <div>
            <button onClick={Incrementar}>Incrementar</button>
            <p>Contador:{counter}</p>
            <button onClick={Decrementar}>Decrementar</button>
        </div>
    );
};

export default Count;