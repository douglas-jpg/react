import "./App.css";
import Counter from "./components/Counter";
import Pai from "./components/Pai";
import ListNumeros from "./components/ListNumeros";
import Exercicios from "./components/Exercicios";

function App() {
    const nomes = [
        "douglas",
        "davi",
        "evelyn",
        "yuri",
        "joão",
        "leticia",
        "pedro",
        "cesar",
    ];
    // metodos de arrays: filter, map, recude
    return (
        <>
            <Pai />
            <Counter />
            <ListNumeros numeros={nomes} />
            <hr />
            <Exercicios />
        </>
    );
}

export default App;
