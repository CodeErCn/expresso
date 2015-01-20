//SUMMARY: Define the schema for this model, and add validations for the model.

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	photo: 		String,
	username: 	String,
	password: 	String,
	gender: 	String,
	seeking: 	String,
	img: 		{ 
					data: 			Buffer, 
					contentType: 	String
				},
	birthday: 	String,
	interests: 	{ type: Array, default : [] },
	aboutme: 	{ type: String, default : 'Please tell me a little about yourself.'},
	chosen: 	{ type: Array, default : [] }
});
UserSchema.path('username').required(true, 'User name cannot be blank');
UserSchema.path('password').required(true, 'Priority cannot be blank');
UserSchema.path('seeking').required(true, 'Deadline cannot be blank');

mongoose.model('User', UserSchema);
// Set name as Storage, and routes.js calls on this name and creates the model.
// Make StorageSchema a model and call upon it by the name Storage.