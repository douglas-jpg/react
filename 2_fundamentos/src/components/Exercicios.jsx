import Greating from "./Greating";
import Contador from "./Contador";
import TaskList from "./TaskList.jsx";

export default function Exercicios() {
    const tarefas = [
        { id: 1, text: "escovar os dentes" },
        { id: 2, text: "arrumar a cama" },
        { id: 3, text: "trocar de roupa" },
        { id: 4, text: "tomar cafe da manha" },
        { id: 5, text: "ir para a faculdade" },
        { id: 6, text: "estudar" },
        { id: 7, text: "almoço" },
        { id: 8, text: "estudar" },
        { id: 9, text: "chegar em casa" },
        { id: 10, text: "tomar banho" },
        { id: 11, text: "dormir" },
    ];

    return (
        <>
            <h1>Exercicios</h1>
            <Greating name='Douglas' />
            <Greating name='Evelyn' />
            <Contador />
            <TaskList tasks={tarefas} />
            <TaskList tasks={[]}/>
        </>
    );
}
