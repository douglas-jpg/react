import { RepoProps } from '../../types/repo';
import { StatusProps } from '../../types/status';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackBtn from '../../components/BackBtn/BackBtn';
import Repo from '../../components/Repo/Repo';
import { TailSpin } from 'react-loading-icons';

import * as S from './Styles';

const Repos = () => {
    const { username } = useParams();

    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

    const [status, setStatus] = useState<StatusProps>('default');

    useEffect(() => {
        setStatus('loading');

        const loadRepos = async (username: string): Promise<void> => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos`
                );

                const data = await response.json();

                setStatus('resolve');

                let orderedRepos = data.sort(
                    (a: RepoProps, b: RepoProps) =>
                        b.stargazers_count - a.stargazers_count
                );

                orderedRepos = orderedRepos.slice(0, 5);

                setRepos(orderedRepos);
            } catch (error) {
                console.log(error);
            }
        };

        if (username) {
            loadRepos(username);
        }
    }, [username]);

    if (!repos && status === 'loading') {
        return <TailSpin />;
    }
    return (
        <div>
            <BackBtn />
            <S.Title>Explores os repositorios do usuario: {username}</S.Title>
            {repos && repos.length === 0 && <p>Não ha repositorio</p>}
            {repos && repos.length && (
                <S.ReposContainer>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo} />
                    ))}
                </S.ReposContainer>
            )}
        </div>
    );
};

export default Repos;
