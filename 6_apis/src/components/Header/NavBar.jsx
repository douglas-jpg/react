import Item from './Item';

import { Wrapper } from '../../style';

const NavBar = () => {
    return (
        <Wrapper>
            <Item fetch={'fetchGet'} axios={'axiosGet'} method={'Get'} />
            <Item fetch={'fetchPost'} axios={'axiosPost'} method={'Post'} />
            <Item
                fetch={'fetchUpdate'}
                axios={'axiosUpdate'}
                method={'Update'}
            />
            {/* <Item fetch={'fetchPut'} axios={'axiosPut'} method={'Put'} /> */}
            <Item
                fetch={'fetchDelete'}
                axios={'axiosDelete'}
                method={'Delete'}
            />
        </Wrapper>
    );
};

export default NavBar;
