/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
    // Redirencionando o usuario de URL
    const [userName, setUserName] = useState();

    const navigate = useNavigate();

    const handleSubmite = (e) => {
        e.preventDefault();
        console.log('usuario logado ' + userName);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmite}>
            <label htmlFor='Name'>Name:</label>
            <input
                type='Name'
                id='Name'
                placeholder='Seu Name'
                onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor='password'>Senha:</label>
            <input type='password' id='password' placeholder='Sua senha' />
            <button type='submit'>Fazer login</button>
        </form>
    );
}
