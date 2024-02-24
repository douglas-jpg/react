import { useState } from 'react';
import useInterval from '../Hooks/useInterval';

const ContadorInterval = () => {
    const [contador, setContador] = useState<number>(0);

    useInterval(() => {
        setContador((prev) => prev + 1);
    }, 10000);

    return (
        <div>
            <p>Quantidade de vezes</p>
            <h1>{contador}</h1>
        </div>
    );
};

export default ContadorInterval;
