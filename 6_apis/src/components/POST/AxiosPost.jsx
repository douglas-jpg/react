import { useState } from 'react';
import axios from 'axios';

import { Container } from '../../style';

import AxiosUpdate from '../UPDATE/AxiosUpdate';
import PostForm from './PostForm';

const AxiosPost = () => {
    const [post, setPost] = useState({ post: '', status: '' });

    const handleSubmit = async (newPost) => {
        try {
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                newPost
            );
            console.log('Post criado: ', response);
            setPost({ post: newPost, status: 'add' });
        } catch (error) {
            console.log('erro: ' + error);
        }
    };

    return (
        <Container>
            <h1>POST axios API</h1>
            <PostForm handleSubmit={handleSubmit} />
            <AxiosUpdate onSuccess={post} />
        </Container>
    );
};

export default AxiosPost;
