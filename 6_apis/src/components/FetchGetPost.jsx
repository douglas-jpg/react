import { useState, useEffect } from 'react';
import { Container } from '../style';

const FetchGetPost = ({ onSuccess, onEdit }) => {
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
                const response = await fetch(
                    'http://jsonplaceholder.typicode.com/posts'
                );
                const data = await response.json();
                setPosts(data.slice(0, 5));
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

export default FetchGetPost;
