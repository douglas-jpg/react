import { useState } from 'react';
import { Container } from '../style';
import FetchGetPost from './FetchGetPost';
import PostForm from './PostForm';

const Fetch = () => {
    const [post, setPost] = useState({ post: '', status: '' });
    const [selectedPost, setSelectedPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
            <h1>Fetch API</h1>
            {isEditing && (
                <button onClick={() => handleEdit('cancel')}>Cancelar</button>
            )}
            <PostForm handleSubmit={handleSubmit} postEdit={selectedPost} />
            <FetchGetPost onSuccess={post} onEdit={handleEdit} />
        </Container>
    );
};

export default Fetch;
