const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: { type: String},
    position: { type: String },
    office: { type: String },
    salary: { type: Number}
});

module.exports = mongoose.model('Employee', employeeSchema);