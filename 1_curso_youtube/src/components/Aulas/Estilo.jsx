// Para importar o estilo do css de um elemento 
import styles from "../css/Estilo.module.css";


export default function Estilo() {
    return (
        <>
            <p className={styles.estilo1}>Este texto foi editado com css</p>
            <p className={styles.estilo2}>Este texto foi editado com css</p>
        </>
    );
}
