import { useContext } from 'react';
import { MeuContexto } from '../contexts/MeuContexto';

const ValorContext = () => {
    const { mensagem } = useContext(MeuContexto);

    return <div>O valor do contexto é: {mensagem}</div>;
};

export default ValorContext;
