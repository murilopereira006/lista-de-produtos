import React from 'react';
import { ItemContainer, ItemName, ItemPrice, ItemCategory, StyledLink } from './styles';

const ProductItem = ({ product, hoverColor }) => {
    return (
        <StyledLink to={`/product/${product.id}`}>
            <ItemContainer hoverColor={hoverColor}>
                <ItemName>{product.nome}</ItemName>
                <ItemPrice>{`R$ ${product.preco.toFixed(2)}`}</ItemPrice>
                <ItemCategory>{product.categoria}</ItemCategory>
            </ItemContainer>
        </StyledLink>
    );
};

export default ProductItem;
