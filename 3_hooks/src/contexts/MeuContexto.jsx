import { useState, createContext } from 'react';

// esses são os passo para criar qualquer contexto

// cria a varivel
export const MeuContexto = createContext();

// criar a variavelcom provider recebendo como parametro children
export const MeuContextoProvider = ({ children }) => {
    // isso é o que eu quero que o contexto passe
    const [mensagem, setMensagem] = useState('Mensagem inicial');

    // coloco tudo que eu quero em um objeto
    const valorDoContexto = {
        mensagem,
        setMensagem,
    };

    // retorno o contexto.provider setando o value com o objeto
    // e passando o children
    return (
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    );
};
