import './App.css';
import ContadorInterval from './components/ContadorInterval';
import Counter from './components/Counter';
import FormularioLogin from './components/FormularioLogin';
import HelloWorld from './components/HelloWorld';
import TextInput from './components/TextInput';

function App() {
    return (
        <>
            {/* 1 - Componentes funcionais */}
            <HelloWorld nome='Douglas' idade={20} />
            <h2>React com typescript</h2>
            {/* Hooks com tipos */}
            <Counter />
            {/* 3 - Manipulação de eventos com tipos */}
            <TextInput />
            {/* Criando Hooks */}
            <ContadorInterval />
            <hr />
            <FormularioLogin />
        </>
    );
}

export default App;
