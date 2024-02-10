import "./App.css";
import Aula from "./components/Aula";
import HelloWorld from "./components/Aulas/HelloWorld";
import SayMyName from "./components/Aulas/SayMyName";
import Estilo from "./components/Aulas/Estilo";
import Botao from "./components/Aulas/Botao";
import Form from "./components/Aulas/Form";
import Condicao from "./components/Aulas/Condicao";
import Lista from "./components/Aulas/Listas";
import Titulo from "./components/Aulas/Titulo";

// Usar o espaço de fora para poder importar os compoentes

function App() {
    // Dentro da função para fazer a logica

    // Posso criar variaveis e outra funções
    const nome = "Douglas";

    function soma(a, b) {
        return a + b;
    }

    const frutas = [
        "banana",
        "maçã",
        "uva",
        "laranja",
        "maracuja",
        "limão",
        "morango",
        "acerola",
    ];

    return (
        // Todo o conteudo de um componente precisa ser filho de um unico pai
        <>
            {/* Criar comentarios dentro dos componentes é assim 
            Variaveissão colocadas dentro de chaves*/}
            <Aula numero={1} conteudo={"Primeira aula"} />
            <HelloWorld />
            <HelloWorld /> {/* As tags podem ser reutilizadas */}
            <HelloWorld />
            <p>
                Ola o meu nome é {nome} e a soma de 2 + 3 é {soma(2, 3)}
            </p>
            <Aula numero={2} conteudo={"props"} />
            {/* Props são os parametros que eu posso adiconar na tag */}
            <SayMyName nome={"Douglas"} idade={19} />
            <SayMyName nome={"Evelyn"} idade={20} />
            <SayMyName nome={"Davi"} idade={21} />
            <Aula numero={3} conteudo={"CSS"} />
            {/* Não pode usar classes com traço - */}
            <p className='estilo'>As classes agora se chama className</p>
            <Estilo />
            <Aula numero={4} conteudo={"fragments"} />
            {/* Fragments são tags que nao geram elementos pais <> </>
            elas são ultilizadas para evitar complicação no DOM  */}
            <>Essse texto esta em tags de fragmento</>
            <Aula numero={5} conteudo={"Testando eventos"} />
            <Botao btn={"Botão 1"} />
            <Botao btn={"Botão 2"} />
            {/* posso tbm passar uma função */}
            <Botao btn={"Botão 3"} />
            <Aula numero={6} conteudo={"use State"} />
            <Form />
            <Aula numero={7} conteudo={"Condição por rendereização"} />
            <Condicao />
            <Aula numero={8} conteudo={"Renderização de lista"} />
            <Lista itens={frutas}/>
            <Lista itens={[]}/>
            <Aula numero={9} conteudo={"State lift"} />
            <Titulo />
        </>
    );
}

export default App;
