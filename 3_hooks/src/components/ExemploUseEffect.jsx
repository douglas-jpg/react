import { useEffect, useState } from 'react';

const ExemploUseEffect = () => {
    // use Effect executa algo baseado em algo
    // a mundança de valor, o carregamento de algo, etc
    // ele é usado bastante para requisições de APIs 

    const [contador, setContador] = useState(0);

    // useEffect(função anonima, array de dependencias)
    // o useEffect sempre sera executado quando o array de dependencias mudar
    // se não tiver nada ele sera executado uma vez
    useEffect(() => {
        document.title = `Voce clicou ${contador} vezes`;
    });

    return (
        <button onClick={() => setContador(contador + 1)}>Clique aqui!</button>
    );
};

export default ExemploUseEffect;


// Para executar o useEffect só uma vez, deixe o segundo parâmetro, o array vazio.
// useEffect(fn, []);

// Para observar algum valor, adicione ele no array do segunddo parâmetro.
// useEffect(fn, [x]);

// A função que você retorna irá ser chamada quando o componente for desmontado.
// useEffect(() => {
//   return () => doSomething();
// }, []);