const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

// Create Schema 
const marvelSchema = new Schema({
    name: {
      type: String, 
      required: true 
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = marvel = mongoose.model('Marvels', marvelSchema);
