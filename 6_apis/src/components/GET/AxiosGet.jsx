import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '../../style';

const AxiosGet = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    'http://jsonplaceholder.typicode.com/posts'
                );
                setPosts(response.data);
            } catch (error) {
                setError(error.menssage);
            }
        };

        fetchPost();
    }, []);

    return (
        <Container>
            <h1>GET Axios API</h1>
            {error ? (
                <p>Erro: {error}</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </Container>
    );
};

export default AxiosGet;
