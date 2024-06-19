import { mount } from 'cypress/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProductItem from '../../src/components/productItem';

describe('ProductItem Component', () => {
    const product = {
        id: 1,
        nome: 'Produto 1',
        preco: 10.0,
        categoria: 'Categoria 1'
    };

    it('renders product details', () => {
        mount(
            <BrowserRouter>
                <ProductItem product={product} />
            </BrowserRouter>
        );
        cy.contains(product.nome).should('exist');
        cy.contains(`R$ ${product.preco.toFixed(2)}`).should('exist');
        cy.contains(product.categoria).should('exist');
    });
});
