import styles from "./css/Aulas.module.css"

export default function Aulas({ numero, conteudo }) {
    return (
        <>
            <hr />
            <h2 className={styles.aula}>Aula {numero}</h2>
            <h3 className={styles.aula}>Conteudo: {conteudo}</h3>
        </>
    );
}
