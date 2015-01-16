//SUMMARY: Define the schema for this model, and add validations for the model.

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	username: 	String,
	password: 	String,
	gender: 	String,
	seeking: 	String,
	img: 		{ 
					data: 			{ type: Buffer, default : null }, 
					contentType: 	String
				},
	birthday: 	String,
	interests: 	{ type: Array, default : [] },
	aboutme: 	String,
	chosen: 	{ type: Array, default : [] }
});
// StorageSchema.path('name').required(true, 'Storage name cannot be blank');
// StorageSchema.path('priority').required(true, 'Priority cannot be blank');
// StorageSchema.path('deadline').required(true, 'Deadline cannot be blank');

mongoose.model('User', UserSchema);
// Set name as Storage, and routes.js calls on this name and creates the model.
// Make StorageSchema a model and call upon it by the name Storage.
