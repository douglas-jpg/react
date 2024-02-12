import { Routes, Route } from 'react-router-dom';

import Home from './components/Header/Home';
import Header from './components/Header/Header';
import AxiosPost from './components/POST/axiosPost';
import FetchPost from './components/POST/fetchPost';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/fetchPost' element={<FetchPost />} />
                <Route path='/axiosPost' element={<AxiosPost />} />
            </Routes>
        </>
    );
}

export default App;
