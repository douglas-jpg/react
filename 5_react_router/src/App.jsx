import './App.css';
import Home from './Pages/Home';
import Contatos from './Pages/Contatos';
import About from './Pages/About';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Perfil from './Pages/Perfil';
import Settings from './Pages/Settings';
import Adm from './Pages/Adm';
import Sobre from './Pages/Sobre';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import TaskDetails from './Pages/TaskDetails';
import NotFound from './Pages/NotFound';

function App() {
    return (
        <>
            {/* 1 Setup de configuração inicial */}
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>Sobre</Link>
                    </li>
                    {/* 2 NavLink  */}
                    <li>
                        {/* Com o navlink vc pode usar essa classe para ver se esta ativo */}
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeLink' : ''
                            }
                            to={'/contatos'}
                        >
                            contatos
                        </NavLink>
                    </li>
                    {/* 3 useNavigate */}
                    <li>
                        {/* Com o navlink vc pode usar essa classe para ver se esta ativo */}
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeLink' : ''
                            }
                            to={'/login'}
                        >
                            Login
                        </NavLink>
                    </li>
                    {/* 4 Rotas aninhadas */}
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeLink' : ''
                            }
                            to={'/dashboard'}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
                {/* 5 Rotas dinamicas */}
                <div>
                    <Link to={'/task/1'}>Tarefa 1</Link>
                    <Link to={'/task/2'}>Tarefa 2</Link>
                    <Link to={'/task/3'}>Tarefa 3</Link>
                    <Link to={'/task/4'}>Tarefa 4</Link>
                </div>
                {/* 6 rota 404 not found */}
                <div>
                    <h2>itens</h2>
                    <Link to={'item/1'}>Item 1</Link>
                </div>
            </nav>
            {/* Tudo que fica fora do Routes vai se repetir em qualquer pagina muda apenas o que esta dentro */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contatos' element={<Contatos />} />
                <Route path='/about' element={<About />} />
                {/* 3 useNavigate */}
                <Route path='/login' element={<Login />} />
                {/* 4 rotas aninhadas */}
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='perfil' element={<Perfil />} />
                    <Route path='settings' element={<Settings />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='adm' element={<Adm />} />
                </Route>
                {/* 5 rotas dinamicas */}
                <Route path='/task/:taskId' element={<TaskDetails />} />
                {/* 6 rotas 404 not found */}
                <Route path='*' element={<NotFound />} />
            </Routes>
            <h2>Esse é o rodape que repete em tudo</h2>
        </>
    );
}

export default App;
