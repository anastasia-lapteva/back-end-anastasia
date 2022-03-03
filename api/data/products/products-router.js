const express = require('express');
const Product = require('./products-model');
const { restricted } = require('../middleware/restricted');

const router = express.Router();

router.get('/', restricted, async (req, res, next) =>
{
    try
    {
        const data = await Product.get();
        res.json(data);
    } catch (err)
    {
        next(err);
    }
});

router.get('/:id', restricted, async (req, res, next) =>
{
    try
    {
        const data = await Product.getById(req.params.id);
        res.json(data);
    } catch (err)
    {
        next(err);
    }
});

module.exports = router;