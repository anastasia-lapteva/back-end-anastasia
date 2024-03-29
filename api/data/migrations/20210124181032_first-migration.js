exports.up = async (knex) =>
{
    await knex.schema
        .createTable('users', (users) =>
        {
            users.increments('user_id');
            users.string('firstName', 255).notNullable();
            users.string('lastName', 255).notNullable();
            users.string('email', 255).notNullable();
            users.string('username', 255).notNullable();
            users.string('password', 255).notNullable();
            users.timestamps(false, true);
        });

    await knex.schema
        .createTable('products', (products) =>
        {
            products.increments('id');
            products.string('name', 50).notNullable();
            products.string('description', 100);
            products.string('retailPrice', 50).notNullable();
            products.string('wholesalePrice', 50).notNullable();
            products.string('image', 1000000);
        });
};

exports.down = async (knex) =>
{
    await knex.schema.dropTableIfExists('products');
    await knex.schema.dropTableIfExists('users');
};
