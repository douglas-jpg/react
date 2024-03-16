import { MdLocationPin } from 'react-icons/md';
import { UserProps } from '../../types/user';
import { Link } from 'react-router-dom';

import * as S from './Styles';

const User = ({
    avatar_url,
    login,
    location,
    followers,
    following,
}: UserProps) => {
    return (
        <S.UserContainer>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <S.Location>
                    <MdLocationPin />
                    <span>{location}</span>
                </S.Location>
            )}
            <S.States>
                <div>
                    <p>Sequidores:</p>
                    <S.Number>{followers}</S.Number>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <S.Number>{following}</S.Number>
                </div>
            </S.States>
            <Link to={`/repos/${login}`}> Ver melhores projetos</Link>
        </S.UserContainer>
    );
};

export default User;
