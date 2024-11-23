const express = require('express');
const { Case } = require('../models/Case');
const caseRouter = express.Router();

caseRouter.post('/', async (req, res) => {
    const { name } = req.body;

    const newCase = await Case.create({
        name
    });

    res.json( newCase );
});

caseRouter.get('/', async (req, res) => {
    const cases = await Case.find({});
    res.json( cases );
});

caseRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    const foundCase = await Case.findOne({ _id });

    if ( !foundCase ) {
        return res.status(404).json({ message: 'Case not found' });
    }

    res.json( foundCase );
});

module.exports = { caseRouter };