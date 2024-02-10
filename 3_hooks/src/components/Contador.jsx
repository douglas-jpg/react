import { useReducer } from 'react';

// Definição de estado inicial
const estadoInicial = { contador: 0 };

// Função reducer que define como as ações atualizam o estado
function reducer(estado, acao) {
    switch (acao.tipo) {
        case 'incrementar':
            return { contador: estado.contador + 1 };
        case 'decremetar':
            return { contador: estado.contador - 1 };
        case 'resetar':
            return { contador: 0 };
        case 'dobrar':
            return { contador: estado.contador * 2 };
        case 'triplicar':
            return { contador: estado.contador * 3 };
        default:
            throw new Error('ação não suportada');
    }
}

const Contador = () => {
    // Inicializar o useReducer com estado inicial e função modificadora
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    return (
        <div>
            <p>Contagem: {estado.contador}</p>
            <button onClick={() => dispatch({ tipo: 'incrementar' })}>
                incrementar
            </button>
            <button onClick={() => dispatch({ tipo: 'decremetar' })}>
                decrementar
            </button>
            <button onClick={() => dispatch({ tipo: 'resetar' })}>
                resetar
            </button>
            <button onClick={() => dispatch({ tipo: 'dobrar' })}>dobrar</button>
            <button onClick={() => dispatch({ tipo: 'triplicar' })}>
                triplicar
            </button>
        </div>
    );
};

export default Contador;
