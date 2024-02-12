import { Routes, Route } from 'react-router-dom';

import Home from './components/Header/Home';
import Header from './components/Header/Header';
import Axios from './components/axios';
import Fetch from './components/fetch';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/fetch' element={<Fetch />} />
                <Route path='/axios' element={<Axios />} />
            </Routes>
        </>
    );
}

export default App;
