import React from 'react';
import { FilterContainer, Select, Option } from './styles';

const Filter = ({ categories, category, setCategory, sort, setSort, priceRange, setPriceRange, itemsPerPage, setItemsPerPage }) => {
    return (
        <FilterContainer>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <Option value="">Todas as Categorias</Option>
                {categories.map((cat, index) => (
                    <Option key={index} value={cat}>{cat}</Option>
                ))}
            </Select>
            <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <Option value="">Ordenar</Option>
                <Option value="desc">A-Z</Option>
                <Option value="asc">Z-A</Option>
            </Select>
            <Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <Option value="">Faixa de Preço</Option>
                <Option value="0-50">R$0 - R$50</Option>
                <Option value="50-100">R$50 - R$100</Option>
                <Option value="100-200">R$100 - R$200</Option>
                <Option value="200+">Acima de R$200</Option>
            </Select>
            <Select value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
                <Option value="20">20 por página</Option>
                <Option value="50">50 por página</Option>
            </Select>
        </FilterContainer>
    );
};

export default Filter;
