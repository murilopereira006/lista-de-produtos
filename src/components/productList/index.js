import React from 'react';
import ProductItem from '../productItem';
import { ListContainer } from './styles';

const ProductList = ({ products }) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ListContainer>
  );
};

export default ProductList;
