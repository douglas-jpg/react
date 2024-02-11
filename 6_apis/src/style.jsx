import styled from 'styled-components';

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    padding: 10px;
    margin: 20px;

    text-align: center;

    border: 1px solid rgba(255, 255, 255, 0.87);
    border-radius: 5px;
    background-color: #363636;

    & div {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`;

export const Wrapper = styled.nav`
    display: flex;
    align-self: center;
    justify-content: space-around;
`;

export const Container = styled.div`
    text-align: center;

    & button {
        color: rgba(255, 255, 255, 0.87);
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;

    & div {
        margin-bottom: 30px;
    }

    & label {
        display: block;

        font-size: 2rem;
        font-weight: 700;
        text-align: start;
    }

    & input,
    textarea {
        max-width: 600px;
        width: 400px;
        min-width: 200px;

        padding: 10px;

        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.87);
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

        border-radius: 8px;
        border: 2px solid rgba(255, 255, 255, 0.87);
        outline: none;
        background-color: #363636;
    }
`;
