import { useState } from 'react';
import { Container } from '../../style';
import FetchUpdate from '../UPDATE/FetchUpdate';
import PostForm from './PostForm';

const FetchPost = () => {
    const [post, setPost] = useState({ post: '', status: '' });

    const handleSubmit = async (newPost) => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPost),
                }
            );
            console.log('Post criado: ', response);
            setPost({ post: newPost, status: 'add' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <h1>POST fetch API</h1>
            <PostForm handleSubmit={handleSubmit} />
            <FetchUpdate onSuccess={post} />
        </Container>
    );
};

export default FetchPost;
