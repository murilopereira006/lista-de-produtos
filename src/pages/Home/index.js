import React, { useState, useEffect } from 'react';
import ProductList from '../../components/productList';
import { produtos } from '../../utils/data';
import Filter from '../../components/filter';
import { HomeContainer } from './styles';

const Home = () => {
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = [...new Set(produtos.map(product => product.categoria))];
        setCategories(uniqueCategories);
    }, []);

    return (
        <HomeContainer>
            <Filter
                categories={categories}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
            />
            <ProductList
                products={produtos}
                category={category}
                sort={sort}
                priceRange={priceRange}
                itemsPerPage={itemsPerPage}
            />
        </HomeContainer>
    );
};

export default Home;
