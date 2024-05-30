//create our schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:String,age:String
})
const MyModel = mongoose.model('users', userSchema); //connecting with users collection
module.exports = MyModel