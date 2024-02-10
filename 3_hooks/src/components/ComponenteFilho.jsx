import { useContext } from 'react';
import { MeuContexto } from '../contexts/MeuContexto';

const ComponenteFilho = () => {
    const { mensagem, setMensagem } = useContext(MeuContexto);

    return (
        <button
            onClick={() => {
                setMensagem('Nova mensagem');
            }}
        >
            Alterar mensagem "{mensagem}"
        </button>
    );
};

export default ComponenteFilho;
