import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemContainer = styled.div`
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 1rem;
    background: white;
    transition: background 0.3s, color 0.3s;

    &:hover {
        background: ${props => props.hoverColor ? props.hoverColor : '#a0a0a0'};
        color: #fff;
    }
`;

export const ItemName = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
`;

export const ItemPrice = styled.p`
    font-size: 1rem;
`;

export const ItemCategory = styled.p`
    font-size: 0.875rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover ${ItemContainer} {
        background: ${props => props.hoverColor ? props.hoverColor : '#a0a0a0'};
        color: #fff;
    }
`;
