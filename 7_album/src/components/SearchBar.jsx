import { SearchBarContainer } from '../styles';

const SearchBar = ({ setQuerry, setCategory, setActivateSearch }) => {
    const categories = [
        'Animais',
        'Esportes',
        'Natureza',
        'Pessoa',
        'Tecnologia',
    ];

    return (
        <SearchBarContainer>
            <input
                type='text'
                placeholder='Pesquisar fotos'
                onChange={(e) => setQuerry(e.target.value)}
            />
            <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
            <select
                defaultValue=''
                onChange={(e) => {
                    setCategory(e.target.value);
                    setActivateSearch(true);
                }}
            >
                <option value='' disabled hidden>
                    Categorias
                </option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </SearchBarContainer>
    );
};

export default SearchBar;
