App.controller('appController', function($scope, Storage){
	$scope.user = {};	
    $scope.objectId = {};   								// set blank object to scope initially
    $scope.createUser = function(){
        var newperson = $scope.user;
    	Storage.createUser(function(data){					// browser will say 'done' from the res.send server side
            $scope.objectId.id = data._id 
        }, newperson);										// pass in the callback, and the new user info
    };
    $scope.getUser = function(objectId){
        console.log(objectId);								// to getUser, pass in an id. In this example it is already set.
    	var id = { id: objectId.id };
    	Storage.getUser(function(data){												
            $scope.user = data;     						// set the scope with the response
        }, id);
    };
    $scope.getAllUsers = function(){
        console.log(objectId);                                                          
        var id = { id: objectId.id };
        Storage.getUser(function(data){                                             
            $scope.user = data;                                                             
        }, id);
    };
});