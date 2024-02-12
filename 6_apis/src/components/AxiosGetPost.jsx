import { useEffect, useState } from 'react';
import { Container } from '../style';
import axios from 'axios';

const AxiosGetPost = ({ onPost, onEdit }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (onPost.status === 'edit') {
            const handleSuccess = async (newPost) => {
                setPosts((currentPosts) =>
                    currentPosts.map((p) => (p.id == newPost.id ? newPost : p))
                );
            };

            handleSuccess(onPost);
        } else if (onPost.status === 'remove') {
            const handleSuccess = async (newPost) => {
                setPosts((currentPosts) =>
                    currentPosts.filter((p) => p.id !== newPost.id)
                );
            };

            handleSuccess(onPost);
        } else {
            const handleSuccess = async (newPost) => {
                setPosts((currentPosts) => [newPost, ...currentPosts]);
            };

            handleSuccess(onPost);
        }
    }, [onPost]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get(
                    'http://jsonplaceholder.typicode.com/posts'
                );
                setPosts(response.data.slice(0, 10));
            } catch (error) {
                console.log('Houve algum erro: ', error);
            }
        };

        getPosts();
    }, []);

    return (
        <Container>
            <h1>Comentarios</h1>
            {posts.map((post, i) => (
                <div key={i}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => onEdit(post, 'edit')}>Editar</button>
                    <button onClick={() => onEdit(post, 'remove')}>
                        Remover
                    </button>
                </div>
            ))}
        </Container>
    );
};

export default AxiosGetPost;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container } from '../style';

// const AxiosGetPost = ({ onSuccess, onEdit }) => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const handleSuccess = (post, operation) => {
//             if (operation == 'add') {
//                 setPosts((currentPost) => [post, ...currentPost]);
//             } else if (operation == 'update') {
//                 setPosts((currentPost) =>
//                     currentPost.map((p) => (p.id == post.id ? post : p))
//                 );
//             }
//         };
//         handleSuccess(onSuccess.post, onSuccess.status);
//     }, [onSuccess]);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(
//                     'http://jsonplaceholder.typicode.com/posts'
//                 );
//                 setPosts(response.data.slice(0, 5));
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchPost();
//     }, []);

//     return (
//         <Container>
//             <h1>Comments</h1>
//             {posts.map((post) => (
//                 <div key={post.id}>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                     <button onClick={() => onEdit(post)}>Editar</button>
//                     <button>Remover</button>
//                 </div>
//             ))}
//         </Container>
//     );
// };

// export default AxiosGetPost;
