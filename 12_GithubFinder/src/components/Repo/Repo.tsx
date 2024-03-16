import { RepoProps } from '../../types/repo';

import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';

import * as S from './Styles';

const Repo = ({
    name,
    language,
    html_url,
    stargazers_count,
    forks_count,
}: RepoProps) => {
    return (
        <S.RepoContainer>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash /> {language}
            </p>
            <S.RepoStater>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </S.RepoStater>
            <S.RepoBtn href={html_url} target='_blank'>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </S.RepoBtn>
        </S.RepoContainer>
    );
};

export default Repo;
