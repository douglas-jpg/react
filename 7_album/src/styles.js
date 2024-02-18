import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;

    text-align: center;
`;

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    margin-bottom: 30px;

    border-bottom: 1px solid black;

    & input {
        padding: 10px;

        font-size: 1rem;

        border-radius: 5px;
    }

    & button {
        cursor: pointer;
        margin: 0 10px 0 30px;
        padding: 12px;

        font-size: 1rem;
        color: white;

        background-color: #2573e8;
        border: 1px solid black;
        border-radius: 7px;
    }

    & select {
        padding: 10px;

        font-size: 1rem;

        border: 2px solid #2573e8;
        border-radius: 7px;
    }
`;

export const Album = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    & img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        max-height: 400px;

        border-radius: 8px;
    }
`;

export const PhotoBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.8);

    & div {
        max-width: 90%;
        max-height: 90%;
    }

    & img {
        max-width: 45%;
        max-height: 100%;

        border-radius: 8px;
    }
`;
