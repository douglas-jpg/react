import { UserProps } from '../../types/user';
import { StatusProps } from '../../types/status';

import { TailSpin } from 'react-loading-icons';

import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import ErrorSearch from '../../components/ErrorSearch/ErrorSearch';

import { useState } from 'react';

import * as S from './styles';

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [status, setStatus] = useState<StatusProps>('default');

    const fetchUser = async (userName: string): Promise<void> => {
        try {
            setStatus('loading');
            const response = await fetch(
                `https://api.github.com/users/${userName}`
            );

            if (!response.ok && response.status === 404) {
                throw new Error('Usuário não encontrado');
            }

            const data = await response.json();

            const { avatar_url, login, location, followers, following } = data;

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following,
            };

            setUser(userData);
            setStatus('resolve');
        } catch (error) {
            setStatus('reject');
        }
    };

    return (
        <S.ContainerHome>
            <Search loadUser={fetchUser} />
            {user && status === 'resolve' ? (
                <User {...user} />
            ) : status === 'reject' ? (
                <ErrorSearch />
            ) : status === 'loading' ? (
                <TailSpin strokeWidth='3px' width='50' height='50' />
            ) : (
                <p>Procurar usuario</p>
            )}
        </S.ContainerHome>
    );
};

export default Home;
