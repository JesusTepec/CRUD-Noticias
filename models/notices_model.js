const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NoticesSchema = new Schema({
    title: {type: String, required: true, max: 100},
    text: {type: String, required: true, max: 400},
    author: {type: String, required: true, max: 60},
    category: {type: String, required: true, max: 20},
    date: {type: Date, required: true}
});

// Export the model
module.exports = mongoose.model('Notices', NoticesSchema);
