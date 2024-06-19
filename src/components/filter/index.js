import React, { useState, useEffect } from 'react';
import { FilterContainer, Select, Option, Input } from './styles';

const Filter = ({ categories = [], category, setCategory, sort, setSort, priceRange, setPriceRange, itemsPerPage, setItemsPerPage, searchQuery, setSearchQuery }) => {
    const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchQuery(localSearchQuery);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [localSearchQuery, setSearchQuery]);

    return (
        <FilterContainer>
            <Input
                type="text"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                placeholder="Buscar por nome"
            />
            <Select aria-label="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
                <Option value="">Todas as Categorias</Option>
                {categories.map((cat, index) => (
                    <Option key={index} value={cat}>{cat}</Option>
                ))}
            </Select>
            <Select aria-label="Ordenar" value={sort} onChange={(e) => setSort(e.target.value)}>
                <Option value="">Ordenar</Option>
                <Option value="asc">A-Z</Option>
                <Option value="desc">Z-A</Option>
            </Select>
            <Select aria-label="Faixa de Preço" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <Option value="">Faixa de Preço</Option>
                <Option value="0-50">R$0 - R$50</Option>
                <Option value="50-100">R$50 - R$100</Option>
                <Option value="100-200">R$100 - R$200</Option>
                <Option value="200+">Acima de R$200</Option>
            </Select>
            <Select aria-label="Itens por Página" value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
                <Option value="20">20 por página</Option>
                <Option value="50">50 por página</Option>
            </Select>
        </FilterContainer>
    );
};

export default Filter;
