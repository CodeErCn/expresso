// require mongo models and use schema created in server/models
var mongoose = require('mongoose'); 
var User = mongoose.model('User');

//controller methods based on routes.js
module.exports = {
	index: function(req, res){
    	res.render('main/index', {title: 'ExpressIO'});	
	}
	show_all: function(req, res){
    	console.log('got into show_all fxn in controller');
	}
	show: function(req, res){
    	console.log('got into show fxn in controller');
	}
	create: function(req, res){
    	console.log('got into create fxn in controller');
	}
	update: function(req, res){
    	console.log('got into update fxn in controller');
	}
};