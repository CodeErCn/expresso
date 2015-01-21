// set up factory with data, call it Storage
App.factory('Storage', function($http){
	var factory = {};
	var user = {};
	var liked = [];
	// For Login Partial -->
	factory.loginClicked = function(login, callback){
		$http.post('/login', login).success(function(output){		//post to users/new in routes, upon succes run call back fxn
			if(typeof(output) == "String"){
				callback(output);
			}
			else{
				user = output;
				callback(output);
			}
		});
		return user;
	};
	// <-- For Login Partial
	// For Registration --->
	factory.createUser = function(callback, person){
		var image = null;
		$http.post('/users/new', person).success(function(output){	//post to users/new in routes, upon succes run call back fxn
			callback(output);
		});
	};
	// <--- For Registration
	// Retrieving pre-existing users --->
	factory.getUser = function(callback, id){
		var url = '/users/' + id.id;								// in routes, go to users/:id, the id/argument is passed through the url
		$http.get(url).success(function(output){		
			callback(output);
		});
	};
	factory.getAllUsers = function(callback){						
		$http.get('/users/').success(function(output){		
			callback(output);
		});
	};
	// <--- Retrieving pre-existing users
	// Get all chosen hottie objects, or add a new one --->
	factory.getAllChosen = function(chosenArr, callback){
		$http.post('/getAllChosen/', chosenArr).success(function(output){		
			callback(output);
		});
	};
	factory.addChosen = function(callback, chooserID, chosenArr){
		var send = 	{ 	
						chooserID: chooserID,
						chosenArr: chosenArr
					};			
		$http.post('/addChosen/', send).success(function(output){		
			callback(output);
		});
		chosen = chosenArr;
		return chosen;
	};
	// <--- Get all chosen hottie objects, or add a new one

	// For updating the user profile
	factory.updateProfile = function(data, callback) {
		var uid = '/users/' + data.userId;
		$http.post(uid, data).success(function(output) {
			callback(output);
		});
	}
	//<--- End updating user profile
	return factory
});