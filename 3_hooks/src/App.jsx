import './App.css';
import CalculoPesado from './components/CalculoPesado';
import ComponenteFilho from './components/ComponenteFilho';
import Contador from './components/Contador';
import ContadorCallback from './components/ContadorCallback';
import Container from './components/Container';
import DIsplayWIndowSize from './components/DIsplayWIndowSize';
import ExemploUseEffect from './components/ExemploUseEffect';
import Exercicios from './components/Exercicios';
import PerfilUsuario from './components/PerfilUsuario';
import Timer from './components/Timer';
import ValorContext from './components/ValorContext';
import { MeuContextoProvider } from './contexts/MeuContexto';

function App() {
    return (
        <>
            {/* useEffect */}
            {/* <ExemploUseEffect /> */}
            <Timer />

            {/* useContext */}
            {/* usado em aplicações de pequeno e medio porte
             que precisam transferir o estados entre componetes */}
            <MeuContextoProvider>
                <ComponenteFilho />
                <ValorContext />
            </MeuContextoProvider>
            {/* useReducer */}
            {/* Estados mais complexos */}
            <Contador />
            {/* Custon hook */}
            <DIsplayWIndowSize />
            {/* Slots e children props */}
            <Container>
                <h1>Titulo da seção</h1>
                <p>Subtitulo</p>
                <Contador />
            </Container>
            {/* Sicronizar o estado com props */}
            {/* prop => componete => chamada da API => resultado em um dado */}
            <PerfilUsuario usuarioId={1} />
            <PerfilUsuario usuarioId={2} />
            <PerfilUsuario usuarioId={3} />
            {/* useMemo e useCallback  */}
            <CalculoPesado numeros={5} />
            <ContadorCallback />
            <Exercicios />
        </>
    );
}

export default App;
