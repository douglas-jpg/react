type HelloWorldProps = {
    nome: string;
    idade: number;
};

const HelloWorld = ({ nome, idade }: HelloWorldProps) => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>
                O meu nome é {nome} e tenho {idade} anos
            </p>
        </div>
    );
};

export default HelloWorld;
