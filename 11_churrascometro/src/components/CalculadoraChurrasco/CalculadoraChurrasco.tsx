import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Alimento, nomesAlimentos } from '../../types';

import * as S from './style';

const esquemaValidacao = Yup.object().shape({
    pessoas: Yup.number()
        .min(1, 'Deve haver pelo menos 1 pessoa')
        .required('Número de pessoas é obrigatório'),
    selecaoAlimentos: Yup.array()
        .of(Yup.string())
        .test(
            'check-selecaoAlimentos',
            'Selecione pelo menos um tipo de alimento',
            (array) => array != null && array.length > 0
        ),
});

interface MyFormValues {
    pessoas: number;
    selecaoAlimentos: Array<Alimento>;
}

const CalculadoraChurrasco = () => {
    const navigate = useNavigate();
    const initialValues: MyFormValues = { pessoas: 0, selecaoAlimentos: [] };

    return (
        <S.Container>
            <Formik
                initialValues={initialValues}
                validationSchema={esquemaValidacao}
                onSubmit={(values) => {
                    navigate('/resultado', {
                        state: {
                            pessoas: values.pessoas,
                            alimentosSelecionados: values.selecaoAlimentos,
                        },
                    });
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <S.InputGroup>
                            <S.InputLabel htmlFor='pessoas'>
                                Número de Pessoas:
                            </S.InputLabel>
                            <S.ContainerField
                                name='pessoas'
                                type='number'
                                min='0'
                            />
                            {errors.pessoas && touched.pessoas ? (
                                <S.Error>{errors.pessoas}</S.Error>
                            ) : null}
                        </S.InputGroup>

                        <h2>Selecione os alimentos para o churrasco:</h2>
                        {Object.keys(nomesAlimentos).map((alimento) => (
                            <div key={alimento}>
                                <label>
                                    <S.Checkbox
                                        type='checkbox'
                                        name='selecaoAlimentos'
                                        value={alimento}
                                    />
                                    {nomesAlimentos[alimento]}
                                </label>
                            </div>
                        ))}
                        {errors.selecaoAlimentos ? (
                            <S.Error>{errors.selecaoAlimentos}</S.Error>
                        ) : null}

                        <S.Button type='submit'>Calcular</S.Button>
                    </Form>
                )}
            </Formik>
        </S.Container>
    );
};

export default CalculadoraChurrasco;
