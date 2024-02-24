import { useState } from 'react';

const TextInput = () => {
    const [text, setText] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent
        
        ): void => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={handleChange} />
            <p>{text}</p>
            <button type='submit'>Enviar texto</button>
        </form>
    );
};

export default TextInput;
