import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    background-color: #fdfdfd;
    border-radius: 15px;
    max-width: 550px;
    margin: 20px auto;

    & h2 {
        margin: 10px 0;
    }
`;

export const InputGroup = styled.div`
    margin-bottom: 10px;
`;

export const InputLabel = styled.label`
    margin-bottom: 5px;
    margin-right: 10px;
`;

export const Error = styled.div`
    color: #cb3535;
    margin-top: 5px;
    font-style: italic;
`;

export const Button = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #45a049;
    }
`;

export const ContainerField = styled(Field)`
    padding: 5px;
`;

export const Checkbox = styled(ContainerField)`
    margin-right: 10px;
`;
