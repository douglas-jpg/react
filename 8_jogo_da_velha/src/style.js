import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body{
    font-family: Helvetica, sans-serif, ;

    background-color: #f0f0f0;
}
h1, p {
    text-align: center;
    color: #202020;
}
h1{
    margin-top: 10px;
}`;

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 30px;
`;

export const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 80px);
    gap: 10px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;

    font-size: 24px;
    font-weight: bold;
    color: #fff;

    background-color: #3498db;
    border-radius: 5px;

    &:hover {
        background-color: #2980b9;
    }
`;

export const FlippedCard = styled(CardContainer)`
    background-color: #fff;
    color: #3498db;

    &:hover {
        background-color: #f9f9f9;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    width: 350px;
    padding: 10px;

    color: #fff;
    font-weight: bold;

    border: none;
    border-radius: 5px;
    background-color: #3498db;

    transition: 0.3s;

    &:hover {
        background-color: #2980b9;
    }
`;
