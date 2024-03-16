import ResultadoChurrasco from '../components/ResultadoChurrasco/ResultadoChurrasco';

import * as S from '../styles/globalStyles';
import bgImg from '../assets/bg-2.jpg';

const Resultado = () => {
    return (
        <S.Container $bgImage={bgImg}>
            <h1> Resultado do churrasco:</h1>
            <ResultadoChurrasco />
        </S.Container>
    );
};

export default Resultado;
