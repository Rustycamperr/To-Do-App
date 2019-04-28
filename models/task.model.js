const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 100,
        min: 3
    },
    tags: {
        type: [String],
        required: true
    },
    status:{
        type: Boolean
    }
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);