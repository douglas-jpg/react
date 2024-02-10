export default function Lista({ itens }) {
    return (
        <>
            <h3>Listando os itens:</h3>
            <div>
                {itens.length > 0 ? (
                    itens.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                    <p>Não tem itens</p>
                )}
            </div>
        </>
    );
}
