import { Routes, Route } from 'react-router-dom';

import Home from './components/Header/Home';
import Header from './components/Header/Header';
import AxiosGet from './components/GET/AxiosGet';
import FetchGet from './components/GET/FetchGet';
import AxiosPost from './components/POST/axiosPost';
import FetchPost from './components/POST/fetchPost';
import FetchUpdate from './components/UPDATE/FetchUpdate';
import AxiosUpdate from './components/UPDATE/AxiosUpdate';
import AxiosDelete from './components/DELETE/AxiosDelete';
import FetchDelete from './components/DELETE/FetchDelete';


function App() {
    return (
        <>
            <Header />

            <Routes>
                {/* 1 - GET com fetch e axios */}
                <Route path='/' element={<Home />} />
                <Route path='/fetchGet' element={<FetchGet />} />
                <Route path='/axiosGet' element={<AxiosGet />} />
                {/* 2 - POST com fetch e axios */}
                <Route path='/fetchPost' element={<FetchPost />} />
                <Route path='/axiosPost' element={<AxiosPost />} />
                {/* 3 - UPDATE com fetch e axios */}
                <Route path='/fetchUpdate' element={<FetchUpdate />} />
                <Route path='/axiosUpdate' element={<AxiosUpdate />} />
                {/* 4 - DELETE com fetch e axios */}
                <Route path='/fetchDelete' element={<FetchDelete />} />
                <Route path='/axiosDelete' element={<AxiosDelete />} />
            </Routes>
        </>
    );
}

export default App;
