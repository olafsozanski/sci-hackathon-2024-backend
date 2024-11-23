const express = require('express');
const { Room } = require('../models/room');
const roomRouter = express.Router();

roomRouter.post('/', async (req, res) => {
    const { name, responsiblePerson } = req.body;

    const room = await Room.create({
        name, responsiblePerson,
    });

    res.json( room );
});

roomRouter.get('/', async (req, res) => {
    const room  = await Room.find({}).sort({name: 1}).populate('responsiblePerson');
    res.json( room );
});

roomRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    const room = await Room.findOne({ _id }).populate('responsiblePerson');

    if ( !room ) {
        return res.status(404).json({ message: 'Room not found' });
    }

    res.json( room );
});

module.exports = { roomRouter };