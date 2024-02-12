import { useEffect, useRef, useState } from 'react';
import { FormContainer } from '../style';

const PostForm = ({ onSubmitPost, postEdit }) => {
    const [isEditing, setIsEditing] = useState('');
    const [postEditId, setPostEditId] = useState(null);
    const titleText = useRef();
    const bodyText = useRef();

    useEffect(() => {
        if (postEdit) {
            titleText.current.value = postEdit.title;
            bodyText.current.value = postEdit.body;
            setIsEditing('edit');
            setPostEditId(postEdit.id);
        } else {
            titleText.current.value = '';
            bodyText.current.value = '';
            setIsEditing('');
            setPostEditId(null);
        }
    }, [postEdit]);

    const createPost = () => {
        const newPost = {
            id: postEditId ? postEditId : Date.now(),
            title: titleText.current.value,
            body: bodyText.current.value,
            status: isEditing ? isEditing : 'create',
        };

        return newPost;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = createPost();
        onSubmitPost(newPost);

        titleText.current.value = '';
        bodyText.current.value = '';
        setPostEditId(null);
        setIsEditing('');
    };

    return (
        <FormContainer>
            <div>
                <label htmlFor='title'>Titulo:</label>
                <input
                    type='text'
                    id='title'
                    placeholder='Digite o Titulo'
                    ref={titleText}
                    required
                />
            </div>
            <div>
                <label htmlFor='body'>Comentario:</label>
                <textarea
                    id='body'
                    placeholder='Digite o seu comentario'
                    ref={bodyText}
                    required
                ></textarea>
            </div>
            <button type='submit' onClick={handleSubmit}>
                Enviar
            </button>
        </FormContainer>
    );
};

export default PostForm;

// // PostForm.jsx
// import { useEffect, useState } from 'react';
// import { FormContainer } from '../style';

// const PostForm = ({ handleSubmit, postEdit }) => {
//     const [formData, setFormData] = useState({
//         title: postEdit?.title || '',
//         body: postEdit?.body || '',
//         id: Math.floor(Math.random() * 100),
//     });

//     useEffect(() => {
//         if (postEdit) {
//             setFormData({
//                 ...formData,
//                 title: postEdit.title,
//                 body: postEdit.body,
//             });
//             handleSubmit(formData, true);
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [postEdit]);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.id]: e.target.value,
//         });
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();
//         handleSubmit(formData, false);
//         setFormData({
//             title: '',
//             body: '',
//             id: Date.now(),
//         });
//     };

//     return (
//         <FormContainer onSubmit={onSubmit}>
//             <div>
//                 <label htmlFor='title'>Titulo:</label>
//                 <input
//                     type='text'
//                     id='title'
//                     placeholder='Digite o seu Titulo'
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor='body'>Comentario:</label>
//                 <textarea
//                     id='body'
//                     placeholder='Digite o seu comentario'
//                     value={formData.body}
//                     onChange={handleChange}
//                     required
//                 ></textarea>
//             </div>
//             <button type='submit'>Enviar Post</button>
//         </FormContainer>
//     );
// };

// export default PostForm;
