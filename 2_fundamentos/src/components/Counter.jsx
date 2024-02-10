import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(1);
    return (
        <button onClick={() => setCounter(counter + 1)}>
            Clique aqui {counter}
        </button>
    );
}

export default Counter;
