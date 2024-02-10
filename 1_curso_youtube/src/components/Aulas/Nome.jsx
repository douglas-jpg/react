export default function Nome({ setNome }) {
    return (
        <>
            <label htmlFor='nome'>Digite o seu nome:</label>
            <input
                type='text'
                name='nome'
                id='nome'
                placeholder='Digite o seu nome'
                onChange={(e) => setNome(e.target.value)}
            />
        </>
    );
}
