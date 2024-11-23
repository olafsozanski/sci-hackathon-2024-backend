const express = require('express');
const { Person } = require('../models/Person');
const personRouter = express.Router();

personRouter.post('/', async (req, res) => {
    const { name, email, role, description, cases } = req.body;

    const person = await Person.create({
        name, email, role, description
    });

    res.json( person );
});

personRouter.get('/', async (req, res) => {
    const people = await Person.find({});
    res.json( people );
});

personRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    const person = await Person.findOne({ _id });

    if ( !person ) {
        return res.status(404).json({ message: 'Person not found' });
    }

    res.json( person );
});

module.exports = { personRouter };