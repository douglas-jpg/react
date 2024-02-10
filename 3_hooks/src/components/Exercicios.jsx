import { useEffect, useMemo, useState } from 'react';

function Usuario({ user }) {
    useEffect(() => {
        if (user) {
            document.title = `${user.nome} - ${user.profissao}`;
        }
    }, [user]);
    return (
        <div>
            <h3>Nome: {user.nome}</h3>
            <p>Idade: {user.idade}</p>
            <p>Profissão: {user.profissao}</p>
        </div>
    );
}

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibCalculator = ({ num }) => {
    const fibResult = useMemo(() => fibonacci(num), [num]);

    return (
        <div>
            <p>
                Fibonacci de {num} é {fibResult}
            </p>
        </div>
    );
};

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
};

const OnlineStatusIndicator = () => {
    const isOnline = useOnlineStatus();

    return (
        <div>
            <p>voce esta atualmente: {isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

const Exercicios = () => {
    const douglas = {
        nome: 'douglas',
        idade: 20,
        profissao: 'programador',
    };

    const [num, setNum] = useState(10);

    return (
        <div>
            <hr />
            <h2>Exercicio 1</h2>
            <Usuario user={douglas} />
            <hr />
            <h2>Exercicio 2</h2>
            <FibCalculator num={num} />
            <hr />
            <h2>Exercicio 3</h2>
            <OnlineStatusIndicator />
        </div>
    );
};

export default Exercicios;
