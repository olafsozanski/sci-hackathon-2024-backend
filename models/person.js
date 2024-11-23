const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    email: String,
    role: String,
    description: String,
    cases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Case'
    }]
});

module.exports = { Person };