import { useState } from "react";
// para usar o useState primeiro importa ela

export default function Form() {
    function cadastrado(e) {
        e.preventDefault();
        console.log(name);
        console.log("Usuario cadastrado");
    }

    // criar uma constante com o variavel e setVariavel
    const [name, setName] = useState("posso atribuir um valor");
    // usa o setName para atricubir o valor (valor que é alterado)
    // e o name para reservar o valor (valor que é trabalhado)

    return (
        <>
            <p>O seu nome é {name}</p>
            <form onSubmit={cadastrado}>
                <div>
                    <label htmlFor='nome'>Nome:</label>
                    <input
                        type='text'
                        id='nome'
                        placeholder='Digite o seu nome'
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='senha'>Senha:</label>
                    <input
                        type='password'
                        id='senha'
                        placeholder='Digite a sua senha'
                    />
                </div>
                <div>
                    <button type='submit'>Cadastras usuario</button>
                </div>
            </form>
        </>
    );
}
