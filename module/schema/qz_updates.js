const mongoose = require('mongoose');

const quickzoom2db = new mongoose.Schema({
    updates: {type: String}
});

module.exports = mongoose.model('tablelists', quickzoom2db);