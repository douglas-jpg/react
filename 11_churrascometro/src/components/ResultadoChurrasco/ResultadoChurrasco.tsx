import { useLocation, useNavigate } from 'react-router-dom';

import { Alimento, nomesAlimentos, quantidadePessoas } from '../../types';

import * as S from './style';

type ResultadoChurrasco = {
    pessoas: number;
    alimentosSelecionados: Alimento[];
};

const ResultadoChurrasco = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as ResultadoChurrasco;

    const totalPorAlimento = state.alimentosSelecionados.reduce(
        (acc, alimento) => {
            acc[alimento] =
                (quantidadePessoas[alimento] * state.pessoas) / 1000;
            return acc;
        },
        {} as Record<Alimento, number>
    );

    const reiniciar = () => {
        navigate('/');
    };

    return (
        <S.Container>
            <S.Title>Resultado para {state.pessoas} pessoas</S.Title>
            {state.alimentosSelecionados.map((alimento) => (
                <S.ResultText key={alimento}>
                    {nomesAlimentos[alimento]}: {totalPorAlimento[alimento]} kg
                </S.ResultText>
            ))}
            <S.ResetButton onClick={reiniciar}>Reiniciar</S.ResetButton>
        </S.Container>
    );
};

export default ResultadoChurrasco;
