const mongoose = require('mongoose');

const Room = mongoose.model('Room', {
    name: String,
    responsiblePerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }
});

module.exports = { Room };