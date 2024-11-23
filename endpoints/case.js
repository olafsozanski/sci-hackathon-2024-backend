const express = require('express');
const { Case } = require('../models/Case');
const caseRouter = express.Router();

caseRouter.post('/', async (req, res) => {
    const { name, description, people } = req.body;

    const newCase = await Case.create({
        name, description, people
    });

    res.json( newCase );
});

caseRouter.get('/', async (req, res) => {
    const cases = await Case.find({}).populate('people');
    res.json( cases );
});

caseRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    const foundCase = await Case.findOne({ _id }).populate('people');

    if ( !foundCase ) {
        return res.status(404).json({ message: 'Case not found' });
    }

    res.json( foundCase );
});

module.exports = { caseRouter };