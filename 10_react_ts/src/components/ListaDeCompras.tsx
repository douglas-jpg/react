import { useState } from 'react';

type Product = {
    id: number;
    name: string;
};

const ListaDeCompras = () => {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [currentProduto, setCurrentProduto] = useState<Product | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setCurrentProduto({
            id: Date.now(),
            name: e.target.value,
        });
    }

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();

        if (currentProduto !== null) {
            setProdutos([...produtos, currentProduto]);
            setCurrentProduto(null);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nome'>Nome do item:</label>
                <br />
                <input
                    type='text'
                    placeholder='Digite o nome do produto'
                    required
                    onChange={handleChange}
                    value={currentProduto ? currentProduto.name : ''}
                />
                <br />
                <button type='submit'>Adicionar a lista</button>
            </form>
            <div>
                <h1>Lista de compras:</h1>
                <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id}>{produto.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListaDeCompras;
