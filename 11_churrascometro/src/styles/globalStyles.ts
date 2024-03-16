import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

interface ContainerProps {
    $bgImage: string;
}

export const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#root{
    height: 100%;
}

body{
    font-family: Helvetica;
    background-color: #f0f0f0;
    height: 100%;
}

h1{
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}
`;

export const Container = styled.div<ContainerProps>`
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 20px;
    background-image: ${(props) => `url(${props.$bgImage})`};
`;
