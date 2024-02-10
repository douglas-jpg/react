/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function ListNumeros({ numeros }) {
    return (
        <ul>
            {numeros.map((numero, index) => (
                <ol key={index}>{numero}</ol>
            ))}
        </ul>
    );
}
