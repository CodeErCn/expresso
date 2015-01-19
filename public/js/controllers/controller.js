App.controller('appController', function($scope, Storage, $location, sharedProperties){
    $scope.user = sharedProperties.getProperty();
    $scope.login = {};
	$scope.browse = {};	
    $scope.objectId = {};   								// set blank object to scope initially
    $scope.login.errors = {};
    $scope.loginClicked = function(){                       // login validations BEGIN ------>
        $scope.login.errors = {};                           // reset any prior errors
        if(typeof($scope.login.username) == 'undefined')
        {
            $scope.login.errors['emptyUser'] = { msg: "Username cannot be blank" }
            $scope.usernameForm.username.$setValidity("emptyUser", false);
        }
        else {
            $scope.usernameForm.username.$setValidity("emptyUser", true);            
        }
        if (typeof($scope.login.password) == 'undefined')
        {
            $scope.login.errors['emptyPW'] = { msg: "Password cannot be blank" };
            $scope.passwordForm.password.$setValidity("emptyPW", false);
        }
        else {
            $scope.passwordForm.password.$setValidity("emptyPW", true);            
        }                                                   // <------ END login validations
        if($scope.usernameForm.$valid && $scope.passwordForm.$valid){
            Storage.loginClicked($scope.login, (function(data){
                if(typeof(data) == "String"){
                    $scope.login.errors['matchFail'] = { msg: data };
                }
                else{
                    sharedProperties.setProperty(data);
                    $location.path('/main');
                }
            })
            );
        }
    };
    $scope.getID = function () {
        var person = sharedProperties.getProperty();
        console.log(person);
    };
    $scope.getUser = function(){
        $rooteScope.user;                                
    };
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
        Storage.getAllUsers(function(data){                                   
            $scope.browse = data;                                                             
        });
    };
});