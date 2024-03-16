import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Repos from './pages/Repos/Repos';

import * as S from './styles/GlobalStyles';

function App() {
    return (
        <S.Container>
            <h1>Github Finder</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/repos/:username' element={<Repos />} />
            </Routes>
        </S.Container>
    );
}

export default App;
