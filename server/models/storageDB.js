//SUMMARY: Define the schema for this model, and add validations for the model.

var mongoose = require('mongoose');
var StorageSchema = new mongoose.Schema({
	date: String
})
// StorageSchema.path('name').required(true, 'Storage name cannot be blank');
// StorageSchema.path('priority').required(true, 'Priority cannot be blank');
// StorageSchema.path('deadline').required(true, 'Deadline cannot be blank');

mongoose.model('Storage', StorageSchema); 
// Set name as Storage, and routes.js calls on this name and creates the model.
// Make StorageSchema a model and call upon it by the name Storage.
