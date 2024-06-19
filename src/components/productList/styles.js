import styled from 'styled-components';

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    @media (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1199px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const PageButton = styled.button`
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }

    &:focus {
        outline: none;
        background-color: #e0e0e0;
    }
`;
