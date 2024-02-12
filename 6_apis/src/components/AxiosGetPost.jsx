import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '../style';

const AxiosGetPost = ({ onSuccess, onEdit }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const handleSuccess = (post, operation) => {
            if (operation == 'add') {
                setPosts((currentPost) => [post, ...currentPost]);
            } else if (operation == 'update') {
                setPosts((currentPost) =>
                    currentPost.map((p) => (p.id == post.id ? post : p))
                );
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
            <h1>Comments</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => onEdit(post)}>Editar</button>
                    <button>Remover</button>
                </div>
            ))}
        </Container>
    );
};

export default AxiosGetPost;
