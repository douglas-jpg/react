import { useMemo } from 'react';

// o useMemo evita toda vez fazer a operação quando renderiza o componete

const CalculoPesado = ({ numeros }) => {
    const resultadoCalculoPesado = useMemo(() => {
        return operacaoPesada(numeros);
    }, [numeros]);

    return <p>Resultado: {resultadoCalculoPesado}</p>;
};

const operacaoPesada = (num) => {
    console.log('Operação pesada');

    return num * 1000;
};

export default CalculoPesado;
