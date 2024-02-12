import { Link } from 'react-router-dom';

import { ContainerItems } from '../../style';

const Item = ({ fetch, axios }) => {
    return (
        <ContainerItems>
            <h2>Requisição</h2>
            <div>
                <Link className='link' to={fetch}>
                    Fetch
                </Link>
                <Link to={axios}>Axios</Link>
            </div>
        </ContainerItems>
    );
};

export default Item;
