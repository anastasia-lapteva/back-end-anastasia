const users = [
    { firstName: "Page", lastName: "Burks", email: "page.burks@gmail.com", username: "page_burks", password: "$2a$08$MTD62nHxmiwxAq.xaqLv..wwntD0vOdmB.KeJTKxl5J8sit6zxwGi" }, // lovePlants
    { firstName: "Robert", lastName: "Bergman", email: "robert.bergman@gmail.com", username: "robert_bergman", password: "$2a$08$9rQW8dRmzVNsKh61FObWVO2T8qAs63H48cGYPH0e3V2iIcuaIVqQG" }, // bob
    { firstName: "Michael", lastName: "Smith", email: "michael.smith@gmail.com", username: "michael_smith", password: "$2a$08$fVz4CkthYQvMjzLLEXYaw.2B3g2ycGUlIL8UMQSNUFX4yAJy7ZMBe" } //scott
];

exports.users = users;

exports.seed = function (knex, Promise)
{
    return knex('users').truncate()
        .then(function ()
        {
            return knex('users').insert(users);
        });
};