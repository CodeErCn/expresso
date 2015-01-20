// set up factory with data, call it Storage
App.factory('Storage', function($http){
	var factory = {};
	var user = {};
	var chosen = [];
	factory.loginClicked = function(login, callback){
		$http.post('/login', login).success(function(output){	//post to users/new in routes, upon succes run call back fxn
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
	factory.createUser = function(callback, person){
		var image = null;
		$http.post('/users/new', person).success(function(output){	//post to users/new in routes, upon succes run call back fxn
			callback(output);
		});
	};
	factory.getUser = function(callback, id){
		var url = '/users/' + id.id;								// in routes, go to users/:id, the id/argument is passed through the url
		$http.get(url).success(function(output){		
			callback(output);
		});
	};
	factory.getAllUsers = function(callback){						
		$http.get(/users/).success(function(output){		
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
	};
	return factory
});