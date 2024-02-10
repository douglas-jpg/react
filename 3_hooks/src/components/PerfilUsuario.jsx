import { useState, useEffect } from 'react';

function PerfilUsuario({ usuarioId }) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        // funçao para buscar dados
        const buscarUsuario = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${usuarioId}`
            );

            const dadosUsuario = await response.json();
            setUsuario(dadosUsuario);

        };

        if (usuarioId) {
            buscarUsuario();
        }
    }, [usuarioId]);

    return (
        <div>
            {usuario ? (
                <div>
                    <h3>{usuario.name}</h3>
                    <h4>{usuario.email}</h4>
                    {/* outros dados do usuário */}
                </div>
            ) : (
                <p>Carregando perfil do usuário...</p>
            )}
        </div>
    );
}

export default PerfilUsuario;
