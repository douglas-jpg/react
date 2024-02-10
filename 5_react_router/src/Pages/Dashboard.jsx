import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'perfil'}>Perfil</Link>
                    </li>
                    <li>
                        <Link to={'settings'}>Configurações</Link>
                    </li>
                    <li>
                        <Link to={'sobre'}>Sobre</Link>
                    </li>
                    <li>
                        <Link to={'adm'}>Adm</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
