import { Link } from 'react-router-dom';
import NavBar from './NavBAr';

import { Container } from '../../style';

const Header = () => {
    return (
        <Container>
            <h1>Requisições com fetch e axios</h1>
            <h2>
                <Link to='/'>Pagina inicial</Link>
            </h2>
            <hr />
            <NavBar />
            <hr />
        </Container>
    );
};

export default Header;
