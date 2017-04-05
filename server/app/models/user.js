// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
	firstName : String,
	lastName : String,
	email : {type: String, required: true, unique: true},
	password : {type: String, required: true},
	admin: Boolean,
	created_at: Date,
	updated_at: Date
});

module.exports = mongoose.model('User', userSchema);