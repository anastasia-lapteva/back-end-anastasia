const products = [
    { name: 'Lemon', description: 'Lemon, a sodium free food', retailPrice: '$1.29', wholesalePrice: '99¢' },
    { name: 'Lime', description: 'Lime, a sodium free food', retailPrice: '59¢', wholesalePrice: '39¢' },
    { name: 'Ginger Root', description: 'Ginger, a sodium free food', retailPrice: '$3.99/lb', wholesalePrice: '$2.99/lb' },
    { name: 'Carrot Bunch', description: 'Carrots, a low-sodium food', retailPrice: '$1.99', wholesalePrice: '99¢' },
    { name: 'Slicing Cucumber', description: 'Green cucumber, a sodium free food', retailPrice: '79¢', wholesalePrice: '59¢' },
    { name: 'Colombia Whole Bean Coffee, 12 oz', description: 'Coffee, a sodium free food', retailPrice: '$15.89', wholesalePrice: '$14.30' }
];

exports.products = products;

exports.seed = function (knex, Promise)
{
    return knex('products').truncate()
        .then(function ()
        {
            return knex('products').insert(products);
        });
};