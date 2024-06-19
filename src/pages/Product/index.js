import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContainer, ProductName, ProductPrice, ProductCategory, ProductImage } from './styles';

const fetchProductById = (id, products) => {
    return products.find(product => product.id === parseInt(id));
};

const fetchImageByCategory = async (category) => {
    const response = await fetch(`https://picsum.photos/seed/${category}/600/400`);
    return response.url;
};

const ProductPage = ({ products }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const productData = fetchProductById(id, products);
        setProduct(productData);
        if (productData) {
            fetchImageByCategory(productData.categoria).then(setImageUrl);
        }
    }, [id, products]);

    if (!product) return <div>Product not found</div>;

    return (
        <ProductContainer>
            <ProductName>{product.nome}</ProductName>
            <ProductPrice>{`R$ ${product.preco.toFixed(2)}`}</ProductPrice>
            <ProductCategory>{product.categoria}</ProductCategory>
            <ProductImage src={imageUrl} alt={product.categoria} />
        </ProductContainer>
    );
};

export default ProductPage;
