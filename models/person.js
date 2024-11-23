const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    email: String,
    role: String,
    description: String
});

module.exports = { Person };