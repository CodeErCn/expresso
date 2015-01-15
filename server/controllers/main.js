// require mongo models and use schema created in server/models
var mongoose = require('mongoose'); 
var Storage = mongoose.model('Storage');

//controller methods based on routes.js
module.exports = {
	index: function(req, res){
    	res.render('main/index', {title: 'ExpressIO'});	
	}
};