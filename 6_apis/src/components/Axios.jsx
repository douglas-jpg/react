import { useState } from 'react';
import axios from 'axios';

import { Container } from '../style';

import AxiosGetPost from './AxiosGetPost';
import PostForm from './PostForm';

const Axios = () => {
    const [post, setPost] = useState({ post: '', status: '' });
    const [selectedPost, setSelectedPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = async (newPost, isEdit) => {
        try {
            if (isEdit) {
                const response = await axios.put(
                    `https://jsonplaceholder.typicode.com/posts/${newPost.id}`,
                    newPost
                );
                console.log('Post editado: ', response);
                setPost({ post: newPost, status: 'update' });
            } else {
                const response = await axios.post(
                    'https://jsonplaceholder.typicode.com/posts',
                    newPost
                );
                console.log('Post criado: ', response);
                setPost({ post: newPost, status: 'add' });
            }
        } catch (error) {
            console.log('erro: ' + error);
        }
    };

    const handleEdit = (post) => {
        if (post == 'cancel') {
            setSelectedPost(null);
            setIsEditing(false);
        } else {
            setSelectedPost(post);
            setIsEditing(true);
        }
    };

    return (
        <Container>
            <h1>Axios API</h1>
            {isEditing && (
                <button onClick={() => handleEdit('cancel')}>Cancelar</button>
            )}
            <PostForm handleSubmit={handleSubmit} postEdit={selectedPost} />
            <AxiosGetPost onSuccess={post} onEdit={handleEdit} />
        </Container>
    );
};

export default Axios;
