import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '../../style';

const AxiosUpdate = ({ onSuccess }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const handleSuccess = (post, operation) => {
            if (operation == 'add') {
                setPosts((currentPost) => [post, ...currentPost]);
            }
        };
        handleSuccess(onSuccess.post, onSuccess.status);
    }, [onSuccess]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    'http://jsonplaceholder.typicode.com/posts'
                );
                setPosts(response.data.slice(0, 5));
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, []);

    return (
        <Container>
            <h1>UPDATE Axios API</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button>Editar</button>
                </div>
            ))}
        </Container>
    );
};

export default AxiosUpdate;
