import React, { useState } from 'react';
import Filter from './index';

export default {
    title: 'Components/Filter',
    component: Filter,
    argTypes: {
        categories: { control: 'array' },
        category: { control: 'text' },
        sort: { control: 'text' },
        priceRange: { control: 'text' },
        itemsPerPage: { control: { type: 'number', min: 10, max: 100, step: 10 } },
    },
};

const Template = (args) => {
    const [category, setCategory] = useState(args.category || '');
    const [sort, setSort] = useState(args.sort || '');
    const [priceRange, setPriceRange] = useState(args.priceRange || '');
    const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage || 20);

    return (
        <Filter
            {...args}
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

export const Default = Template.bind({});
Default.args = {
    categories: ['Categoria 1', 'Categoria 2'],
};
