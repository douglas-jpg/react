import React, { useState } from 'react';

type dataUser = {
    name: string;
    password: string;
};

const FormularioLogin = () => {
    const [user, setUser] = useState<dataUser>({ name: '', password: '' });
    const [ver, setVer] = useState<boolean>(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, name: e.target.value });
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert('O nome de usuario é: ' + user.name);
        alert('A senha dele é: ' + user.password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='nome'>Nome: </label>
            <input
                type='text'
                placeholder='Digite seu nome'
                id='nome'
                required
                onChange={handleChangeName}
            />
            <br />
            <label htmlFor='senha'>Senha: </label>
            <input
                type={ver ? 'text' : 'password'}
                placeholder='Digite sua senha'
                id='senha'
                required
                onChange={handleChangePassword}
            />
            <button type='button' onClick={() => setVer(!ver)}>
                Ver senha
            </button>
            <br />
            <button type='submit'>Login</button>
        </form>
    );
};

export default FormularioLogin;
