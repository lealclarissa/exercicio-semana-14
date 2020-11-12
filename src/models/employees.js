const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
    id: { type: String },
    name : { type : String },
    position: { type: String },
    age: { type: Number },
    accessToTheSystem: { type: Boolean }
},{
    versionKey: false
});

const employees = mongoose.model('employees', employeesSchema);

module.exports = employees;