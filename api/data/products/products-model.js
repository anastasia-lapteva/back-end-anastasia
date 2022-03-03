const db = require('../../data/db-config.js');

module.exports = {
    get,
    getById
};

async function get()
{
    // select * from products
    return db('products');
}

async function getById(id)
{
    // return db('products').where({ id: id }).first();
    // WITHOUT .first() WE ALWAYS GET AN ARRAY WHICH COULD BE EMPTY []
    return db('products')
        .where({ id: id })
        .first();
}