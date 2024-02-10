import { useState } from "react";

export default function Condicao() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function cadastrarUser(e) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail("");
    }

    return (
        <div>
            <form>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    placeholder='Digite o seu email'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button type='submit' onClick={cadastrarUser}>
                    Enviar email
                </button>
            </form>
            {/* esse é o jeito simplificado de fazer condição d react  */}
            {userEmail && (
                <div>
                    <p>O email: {email} foi cadastrado</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    );
}
