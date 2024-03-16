import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

const BackBtn = () => {
    const navigate = useNavigate();
    return (
        <>
            <S.BackBtn onClick={() => navigate(-1)}>Voltar</S.BackBtn>
        </>
    );
};

export default BackBtn;
