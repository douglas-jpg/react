// PostForm.jsx
import { useState } from 'react';
import { FormContainer } from '../../style';

const PostForm = ({ handleSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        id: Math.floor(Math.random() * 20),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);
        setFormData({
            title: '',
            body: '',
            id: Math.floor(Math.random() * 10),
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
