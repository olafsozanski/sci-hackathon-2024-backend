const mongoose = require('mongoose');

const Case = mongoose.model('Case', {
    name: String
});

module.exports = { Case };