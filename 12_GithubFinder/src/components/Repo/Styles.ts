import styled from 'styled-components';

export const RepoContainer = styled.div`
    background-color: #0e1129;
    padding: 2rem;
    border-radius: 10px;
    border: 2px solid #9da5d1;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    flex: 1 0 50%;
`;

export const RepoStater = styled.div`
    display: flex;
    gap: 1rem;

    & svg {
        background-color: #4ed8c7;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-size: 2rem;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        border-radius: 3px;
        border: 1px solid #9da5d1;
        padding-right: 0.4rem;
    }
`;

export const RepoBtn = styled.a`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: #9da5d1;
    background-color: #2b3566;
    border-radius: 5px;
    gap: 0.5rem;
`;
