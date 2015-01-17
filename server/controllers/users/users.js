// require mongo models and use schema created in server/models
var mongoose = require('mongoose'); 
var User = mongoose.model('User');

//controller methods based on routes.js
module.exports = {
	index: function(req, res){
    	res.render('main/index', {title: 'ExpressIO'});	
	},
	show_all: function(req, res){
    	console.log('got into show_all fxn in controller');
	},
	show: function(req, res){
    	User.findOne({ '_id': req.params.id }, function (err, user) {			// find a user object by id
			var photo = user.img.data.toString("base64");						// convert img data to base64 which the broswer can read
          	user.photo = photo;													// put the string in user.photo property for easy access
          	res.send(user);														// send the user back to the controller, set the scope and view.
		});
	},
	create: function(req, res){													// create the object to match schema
		var user = 
			{
				photo: 		'',													// create empty photo string for putting image data upon retrieval
				username: 	req.body.username,
  				password: 	req.body.password,
				gender: 	req.body.gender,
				seeking: 	req.body.seeking,
				img: 		{
								data: null,
								contentType: null
							},
				birthday: 	req.body.birthday,
				interests: 	[req.body.interest1, req.body.interest2, req.body.interest3],
				aboutme: 	req.body.aboutme,
				chosen:   	[]
			};
		var request = require('request');												// simplifies getting images from urls
		
		var urlCopy = req.body.url;														// the following deal with the image data
		user.img.contentType = urlCopy.substring((urlCopy.length-3), urlCopy.length);	// set the contenttype based on whether its .png or .jpg
		if 		(user.img.contentType === "jpg"){ user.img.contentType = 'image/jpg'; } 
		else if (user.img.contentType === "png"){ user.img.contentType = 'image/png'; } 
		else if (user.img.contentType === "peg"){ user.img.contentType = 'image/jpeg'; } 
		request({																		// parameters for request
          	url: req.body.url,
          	encoding: 'binary'
        	}, function(error, response, body) {
          	if (!error && response.statusCode === 200) {								// create storable img data from the photo
            	var buffer = new Buffer(body, 'binary');
            	user.img.data = buffer;
             	var a = new User(user); 												// create the new user
             	a.save(function (err, b) {
             		if(err){
             			console.log(err);
             		}
             		else{
             			console.log(b);
             		}
				});           	
          	}
     	});
     	
     	res.send('done');																// send notice back to the controller's callback function
	},
	update: function(req, res){
    	console.log('got into update fxn in controller');
	}
};