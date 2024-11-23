const mongoose = require('mongoose');

const Case = mongoose.model('Case', {
    name: String,
    description: String,
    people: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
});

module.exports = { Case };