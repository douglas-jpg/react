/* eslint-disable react/prop-types */
export default function TaskList({ tasks }) {
    return (
        <ul className='tasks'>
            {tasks.length != 0 ? (
                tasks.map((task) => <li key={task.id}>{task.text}</li>)
            ) : (
                <p>Você não tem nenhuma tarefa</p>
            )}
        </ul>
    );
}
