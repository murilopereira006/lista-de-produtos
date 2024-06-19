import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #f0f0f0;
    min-height: calc(100vh - 160px); /* Subtrai a altura do cabeçalho */
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
`;

export const Description = styled.p`
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #555;
    text-align: center;
    max-width: 600px;
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

export const LinkItem = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 2px solid #333;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

export const Icon = styled.span`
    font-size: 2rem;
`;
