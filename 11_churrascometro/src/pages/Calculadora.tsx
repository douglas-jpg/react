import CalculadoraChurrasco from '../components/CalculadoraChurrasco/CalculadoraChurrasco';
import * as S from '../styles/globalStyles';

import bgImg from '../assets/bg-1.jpg';

const Calculadora = () => {
    return (
        <S.Container $bgImage={bgImg}>
            <h1>Calculadora de Churrasco</h1>
            <CalculadoraChurrasco />
        </S.Container>
    );
};

export default Calculadora;
