import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inte", sans-serif;
    color: white;
}

body{
    background-color: #0e1129;
    padding: 2rem;
}

p{
    text-align: center;
}

a {
    text-decoration: none;
}

`;

export const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;

    & h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
`;
