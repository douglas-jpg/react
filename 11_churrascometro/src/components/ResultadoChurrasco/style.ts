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
`;

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ResultText = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const ResetButton = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 20px;

    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #45a049;
    }
`;
