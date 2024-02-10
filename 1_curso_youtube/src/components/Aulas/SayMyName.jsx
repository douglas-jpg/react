//  Usa o destruct como paramentro para poder usar os proprio nome
//  ao inves de prop.nome ou prop.idade
export default function SayMyName({ nome, idade }) {
    return (
        <>
            <p>
                Ola, meu nome é {nome} e eu tenho {idade} anos
            </p>
        </>
    );
}
