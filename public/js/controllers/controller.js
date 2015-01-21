App.controller('appController', function($scope, Storage, $location, sharedProperties, $upload){
    $scope.user = sharedProperties.getProperty();
    $scope.hotty = sharedProperties.getHotty();
    $scope.login = {};
	$scope.browse = sharedProperties.getAll();	
    if((typeof $scope.user.chosen !== "undefined") && ($scope.user.chosen.length !== 0)){ 
        Storage.getAllChosen($scope.user.chosen, function(data){
            $scope.hotties = data;
        });                                                                         // pass in an array of id strings, and retrieve the people objects from the array.
    }
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
                    $('.links').html('<a href="#/main"> Dashboard </a> | <a href="#/logoff"> Logout </a>');
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
        Storage.addChosen(function(data){                                             
            console.log(data);                               // set the scope with the response
        }, chooserID, chosenArr);
    };
    $scope.removeChosen = function(chosenID){
        var chosenArr = $scope.user.chosen;
        for (var i = 0; i < chosenArr.length; i++) {
            if(chosenArr[i] == chosenID){
                var idx = i;
            }
        };
        delete chosenArr[idx];
        $scope.user.chosen = chosenArr;
        sharedProperties.setProperty($scope.user);
        $scope.user = sharedProperties.getProperty();
        var chooserID = $scope.user._id;  
        Storage.addChosen(function(data){                                             
            console.log(data);                               // set the scope with the response
        }, chooserID, chosenArr);
        if((typeof $scope.user.chosen !== "undefined") && ($scope.user.chosen.length !== 0)){ 
            Storage.getAllChosen($scope.user.chosen, function(data){
                $scope.hotties = data;
            });                                                                         // pass in an array of id strings, and retrieve the people objects from the array.
        }
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

    // CLICK IMAGE TO VIEW PROFILE FROM MAIN HTML && BOWERSE HTML 
    $scope.viewHotty = function(hotty) {
       sharedProperties.setHotty(hotty);
       $location.path('/hotty');
    }

    // MODAL FOR UPDATING THE USER PROFILE
    var interest = {
        Singing: false,
        Crying: false,
        Biking: false,
        Assassinating: false,
        Firefly: false,
        Eating: false
    };

    $scope.changes = function(userId) {
        console.log(userId);
        // Grabbing information
        var aboutMe = $('input.aboutMe').val();
        var gender = $('input[type="radio"]:checked').val();
        var bday = $('input.bday').val();

        if($('input.singing:checked')) {
            interest.Singing = true;
        }
        if($('input.crying:checked')) {
            interest.crying = true;
        }
        if($('input.biking:checked')) {
            interest.Biking = true;
        }
        if($('input.assass:checked')) {
            interest.Assassinating = true;
        }
        if($('input.firefly:checked')) {
            interest.Firefly = true;
        }
        if($('input.eating:checked')) {
            interest.Eating = true;
        }
        
        console.log(aboutMe);
        console.log(gender);
        console.log(seeking);
        console.log(bday);
        console.log(interest);
    }
});

