// PostForm.jsx
import { useEffect, useState } from 'react';
import { FormContainer } from '../style';

const PostForm = ({ handleSubmit, postEdit }) => {
    const [formData, setFormData] = useState({
        title: postEdit?.title || '',
        body: postEdit?.body || '',
        id: Math.floor(Math.random() * 20),
    });

    useEffect(() => {
        if (postEdit) {
            setFormData({
                ...formData,
                title: postEdit.title,
                body: postEdit.body,
            });
            handleSubmit(formData, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postEdit]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData, false);
        setFormData({
            title: '',
            body: '',
            id: Date.now(),
        });
    };

    return (
        <FormContainer onSubmit={onSubmit}>
            <div>
                <label htmlFor='title'>Titulo:</label>
                <input
                    type='text'
                    id='title'
                    placeholder='Digite o seu Titulo'
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='body'>Comentario:</label>
                <textarea
                    id='body'
                    placeholder='Digite o seu comentario'
                    value={formData.body}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type='submit'>Enviar Post</button>
        </FormContainer>
    );
};

export default PostForm;
