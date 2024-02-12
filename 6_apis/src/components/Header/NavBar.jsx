import Item from './Item';

import { Wrapper } from '../../style';

const NavBar = () => {
    return (
        <Wrapper>
            <Item fetch={'fetchPost'} axios={'axiosPost'} method={'Post'} />
        </Wrapper>
    );
};

export default NavBar;
