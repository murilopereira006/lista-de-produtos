import React from 'react';
import { ItemContainer, ItemName, ItemPrice, ItemCategory } from './styles';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <ItemContainer>
            <Link to={`/product/${product.id}`}>
                <ItemName>{product.nome}</ItemName>
            </Link>
            <ItemPrice>{`R$ ${product.preco.toFixed(2)}`}</ItemPrice>
            <ItemCategory>{product.categoria}</ItemCategory>
        </ItemContainer>
    );
};

export default ProductItem;
