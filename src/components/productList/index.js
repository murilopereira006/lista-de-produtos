import React, { useState, useEffect } from 'react';
import ProductItem from '../productItem';
import { ListContainer, PaginationContainer, PageButton } from './styles';

const ProductList = ({ products, category, sort, priceRange, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let filtered = products;

        if (category) {
            filtered = filtered.filter(product => product.categoria === category);
        }

        if (priceRange) {
            if (priceRange === "200+") {
                filtered = filtered.filter(product => product.preco > 200);
            } else {
                const [min, max] = priceRange.split('-').map(Number);
                filtered = filtered.filter(product => product.preco >= min && product.preco <= max);
            }
        }

        if (sort) {
            filtered = filtered.sort((a, b) => sort === 'asc' ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome));
        }

        setFilteredProducts(filtered);
    }, [products, category, sort, priceRange]);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div>
            <ListContainer>
                {currentProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ListContainer>
            <PaginationContainer>
                {[...Array(totalPages)].map((_, index) => (
                    <PageButton key={index} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </PageButton>
                ))}
            </PaginationContainer>
        </div>
    );
};

export default ProductList;
