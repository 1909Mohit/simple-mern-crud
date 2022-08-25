const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{ type: String},
    email:{ type: String},
    rollno:{ type: Number},
})

module.exports = mongoose.model('Student',studentSchema)