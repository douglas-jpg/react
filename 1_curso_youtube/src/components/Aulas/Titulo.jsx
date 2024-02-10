import { useState } from "react";
import Nome from "./Nome";

export default function Titulo() {
    const [nome, setNome] = useState();

    return (
        <>
            <h2>Seu nome é {nome}</h2>
            <Nome setNome={setNome} />
        </>
    );
}
