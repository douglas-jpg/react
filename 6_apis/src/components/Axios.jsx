import axios from 'axios';
import { useState } from 'react';

import PostForm from './PostForm';
import AxiosGetPost from './AxiosGetPost';

import { Container } from '../style';

const Axios = () => {
    const [post, setPost] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [postEdit, setPostEdit] = useState(null);

    const handleSubmitPost = async (newPost) => {
        if (newPost.status === 'create') {
            await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                newPost
            );
            setPost(newPost);
        } else if (newPost.status === 'edit') {
            await axios.put(
                `https://jsonplaceholder.typicode.com/posts/${newPost.id}`,
                newPost
            );
            setPost(newPost);
        } else if (newPost.status === 'remove') {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/posts/${newPost.id}`,
                newPost
            );
            setPost(newPost);
        }
    };

    const handleEdit = (post, state) => {
        if (state === 'edit') {
            setIsEdit(true);
            setPostEdit(post);
        } else if (state === 'remove') {
            post.status = 'remove';
            handleSubmitPost(post);
        }
    };

    const handleCancel = () => {
        setIsEdit(false);
        setPostEdit(null);
    };

    return (
        <Container>
            <h1>Axios API</h1>
            {isEdit && <button onClick={handleCancel}>Cancelar</button>}
            <PostForm onSubmitPost={handleSubmitPost} postEdit={postEdit} />
            <AxiosGetPost onPost={post} onEdit={handleEdit} />
        </Container>
    );
};

export default Axios;

// import { useState } from 'react';
// import axios from 'axios';

// import { Container } from '../style';

// import AxiosGetPost from './AxiosGetPost';
// import PostForm from './PostForm';

// const Axios = () => {
//     const [post, setPost] = useState({ post: '', status: '' });
//     const [selectedPost, setSelectedPost] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);

//     const handleSubmit = async (newPost, isEdit) => {
//         try {
//             if (isEdit) {
//                 const response = await axios.put(
//                     `https://jsonplaceholder.typicode.com/posts/${newPost.id}`,
//                     newPost
//                 );
//                 console.log('Post editado: ', response);
//                 setPost({ post: newPost, status: 'update' });
//             } else {
//                 const response = await axios.post(
//                     'https://jsonplaceholder.typicode.com/posts',
//                     newPost
//                 );
//                 console.log('Post criado: ', response);
//                 setPost({ post: newPost, status: 'add' });
//             }
//         } catch (error) {
//             console.log('erro: ' + error);
//         }
//     };

//     const handleEdit = (isCancel) => {
//         if (isCancel == 'cancel') {
//             setSelectedPost(null);
//             setIsEditing(false);
//             console.log('Post foi cancelado');
//         } else {
//             setSelectedPost(post);
//             setIsEditing(true);
//             console.log('Post começou a ser editado');
//         }
//     };

//     return (
//         <Container>
//             <h1>Axios API</h1>
//             {isEditing && (
//                 <button onClick={() => handleEdit('cancel')}>Cancelar</button>
//             )}
//             <PostForm handleSubmit={handleSubmit} postEdit={selectedPost} />
//             <AxiosGetPost onSuccess={post} onEdit={handleEdit} />
//         </Container>
//     );
// };

// export default Axios;
