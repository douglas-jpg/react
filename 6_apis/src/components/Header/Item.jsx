import { Link } from 'react-router-dom';

import { ContainerItems } from '../../style';

const Item = ({ fetch, axios, method }) => {
    return (
        <ContainerItems>
            <h2>Requisição {method}</h2>
            <div>
                <Link className='link' to={fetch}>
                    Fetch {method}
                </Link>
                <Link to={axios}>Axios {method}</Link>
            </div>
        </ContainerItems>
    );
};

export default Item;
