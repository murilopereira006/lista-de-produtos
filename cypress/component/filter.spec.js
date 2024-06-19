import { mount } from 'cypress/react';
import React, { useState } from 'react';
import Filter from '../../src/components/filter';

describe('Filter Component', () => {
    const categories = ['Categoria 1', 'Categoria 2'];

    const TestComponent = () => {
        const [category, setCategory] = useState('');
        const [sort, setSort] = useState('');
        const [priceRange, setPriceRange] = useState('');
        const [itemsPerPage, setItemsPerPage] = useState(20);

        return (
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
        );
    };

    it('renders filter options', () => {
        mount(<TestComponent />);
        cy.contains('Todas as Categorias').should('exist');
        cy.contains('Categoria 1').should('exist');
        cy.contains('Categoria 2').should('exist');
        cy.contains('A-Z').should('exist');
        cy.contains('Z-A').should('exist');
        cy.contains('R$0 - R$50').should('exist');
        cy.contains('Acima de R$200').should('exist');
        cy.contains('20 por página').should('exist');
        cy.contains('50 por página').should('exist');
    });

    it('calls setCategory on category change', () => {
        const setCategory = cy.stub().as('setCategory');
        mount(<Filter categories={categories} setCategory={setCategory} />);
        cy.get('select[aria-label="Categoria"]').select('Categoria 1');
        cy.get('@setCategory').should('have.been.calledWith', 'Categoria 1');
    });
});
