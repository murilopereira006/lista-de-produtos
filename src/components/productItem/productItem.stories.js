import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProductItem from './index';

export default {
    title: 'Components/ProductItem',
    component: ProductItem,
    argTypes: {
        product: {
            control: 'object',
            defaultValue: {
                id: 1,
                nome: 'Produto 1',
                preco: 10.0,
                categoria: 'Categoria 1',
            },
        },
        hoverColor: { control: 'color' },
    },
};

const Template = (args) => (
    <BrowserRouter>
        <ProductItem {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    product: {
        id: 1,
        nome: 'Produto 1',
        preco: 10.0,
        categoria: 'Categoria 1',
    },
    hoverColor: '#FFA500',
};
