import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

import * as S from './Styles';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState<string>('');

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key == 'Enter') {
            loadUser(userName);
        }
    };

    return (
        <S.Container>
            <h2>Busque por um usuario:</h2>
            <p>Conheça os melhores repositorios</p>
            <S.Wrapper>
                <input
                    type='search'
                    name='GithubSearach'
                    placeholder='Digite o nome do usuario'
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </S.Wrapper>
        </S.Container>
    );
};

export default Search;
