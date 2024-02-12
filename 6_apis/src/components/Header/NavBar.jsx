import Item from './Item';

import { Wrapper } from '../../style';

const NavBar = () => {
    return (
        <Wrapper>
            <Item fetch={'fetch'} axios={'axios'} />
        </Wrapper>
    );
};

export default NavBar;
