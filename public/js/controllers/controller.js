App.controller('appController', function($scope, Storage, $location, sharedProperties, $upload){
    $scope.user = sharedProperties.getProperty();
    $scope.login = {};
	$scope.browse = sharedProperties.getAll();	   
    // BEGIN VALIDATIONS FOR LOGIN --->                                 
    $scope.login.errors = {};
    $scope.loginClicked = function(){                                               // login validations BEGIN ------>
        $scope.login.errors = {};                                                   // reset any prior errors
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
        }                                                                           // <------ END login validations
        if($scope.usernameForm.$valid && $scope.passwordForm.$valid){               // if username form and password form are valid, go here
            Storage.loginClicked($scope.login, (function(data){
                if(typeof(data) == "string"){
                    $scope.login.errors['matchFail'] = { msg: data };
                }
                else{
                    sharedProperties.setProperty(data);                             // Set shardproperties object
                    $location.path('/main');                                        // reroute to main
                }
            }));
        }
    };
    // <--- END VALIDATIONS FOR LOGIN  
    $scope.createUser = function(){
        var newperson = $scope.user;
    	Storage.createUser(function(data){					// browser will say 'done' from the res.send server side
            $scope.objectId.id = data._id 
        }, newperson);										// pass in the callback, and the new user info
    };
    // Begin GETS for user and multiple user's info --->
    $scope.getUser = function(objectId){					
    	var id = { id: objectId.id };
    	Storage.getUser(function(data){												
            $scope.user = data;     						// set the scope with the response
        }, id);
    };
    $scope.getAllUsers = function(){         
        Storage.getAllUsers(function(data){                                   
            sharedProperties.setAll(data); 
            $location.path('/browse');                                                          
        });
    };
    // <--- END GETS for user and multiple user's info
    // WHEN SOMEONE CHOOSES SOMEONE
    $scope.addChosen = function(chosenID){
        $scope.user.chosen.push(chosenID);   
        sharedProperties.setProperty($scope.user);
        var chooserID = $scope.user._id;  
        var chosenArr = $scope.user.chosen;
        Storage.addChosen(function(data){}, chooserID, chosenArr);
    };

    // FILE UPLOAD BEGIN --->
    $scope.$watch('myFiles', function() {
        if(typeof $scope.myFiles !== "undefined"){
            for (var i = 0; i < $scope.myFiles.length; i++) {
                var file = $scope.myFiles[i];
                $scope.upload = $upload.upload({
                    url: '/uploadFile/' + $scope.user._id,  // node.js route, pass user ID as parameter
                    method: 'POST',
                    data: {myObj: $scope.myModelObj},
                    file: file                              
                }).progress(function(evt) {
                    console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
                }).success(function(data, status, headers, config) {
                    sharedProperties.setProperty(data);     // upon returning data, set the shardProperties User object
                    $scope.user = data;                     // replace the view with new user scope data
                });
            }
        }
    });
    // <--- END FILE UPLOAD
});