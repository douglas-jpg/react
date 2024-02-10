import './App.css';
import AxiosPost from './components/AxiosPost';
import FetchPost from './components/FetchPost';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <>
            <h1>GET com fetch e axios</h1>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='fetchPost'>Fetch Post</Link>
                <Link to='axiosPost'>Axios Post</Link>
            </div>
            <Routes>
                {/* 1 - GET com fetch e axios */}
                <Route path='/' element={<Home />} />
                <Route path='/fetchPost' element={<FetchPost />} />
                <Route path='/axiosPost' element={<AxiosPost />} />
            </Routes>
        </>
    );
}

export default App;
