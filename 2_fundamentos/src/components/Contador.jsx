import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <button onClick={() => setContador(contador + 1)}>
            Você clicou {contador} no botão
        </button>
    );
}
