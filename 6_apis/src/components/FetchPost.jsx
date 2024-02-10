import { useState, useEffect } from 'react';

const FetchPost = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    'http://jsonplaceholder.typicode.com/posts'
                );
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.menssage);
            }
        };

        fetchPost();
    }, []);

    return (
        <div>
            <h1>Post fetch API</h1>
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
        </div>
    );
};

export default FetchPost;
