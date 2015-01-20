App.controller('registerCtrl', function($scope, $location, registerFty) {
  
    var interest = {
        singing: false,
        crying: false,
        biking: false,
        assassine: false,
        firefly: false,
        eating: false
    };

    $scope.getStarted = function() {
        registerFty.addNewUser();
    };

    $scope.addGender = function() {
        var gender=$('input[type="radio"]:checked').val();
        if(gender===undefined) {
            alert("Your gender is very important to us!!");
        } else {
            registerFty.addGender(gender);
            $location.path('/seeking');
        } 
    };

    $scope.addSeeking = function() {
        var genderS=$('input[type="radio"]:checked').val();
        if(genderS===undefined) {
            alert("What you are looking for is very important to us!!");
        } else {
            registerFty.addSeeking(genderS);
            $location.path('/birthday');
        } 
    };

    $scope.addBirthday = function() {
        if($scope.bday===undefined) {
            alert("Birthday please!! We want to wish you happy birthday each year!");
        } else {
            registerFty.addBirthday($scope.bday);
            $location.path('/interest');
        } 
    }



    //JQuery for Interests page
    $('a.singing').on('click', function() {
        $(this).children('span').toggleClass('green'); 
        if(interest.singing === true){
            interest.singing = false;
        } else {
            interest.singing = true;
        }
    });

    $('a.crying').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.crying === true){
            interest.crying = false;
        } else {
            interest.crying = true;
        }
    });

    $('a.biking').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.biking === true){
            interest.biking = false;
        } else {
            interest.biking = true;
        }
    });

    $('a.assassine').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.assassine === true){
            interest.assassine = false;
        } else {
            interest.assassine = true;
        }
    });

    $('a.firefly').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.firefly === true){
            interest.firefly = false;
        } else {
            interest.firefly = true;
        }

    });

    $('a.eating').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.eating === true){
            interest.eating = false;
        } else {
            interest.eating = true;
        }
    });

    
    $scope.addInterests = function() {
        registerFty.addInterests(interest);
        $location.path('/register');
    }

    $scope.turnIn = function() {
        if($scope.reg === undefined){
            alert("Username and password cannot be blank");
        } else if($scope.reg.name === undefined || $scope.reg.password === undefined) {
            alert("Username or password cannot be blank");
        } else {
            registerFty.submit($scope.reg);
            $location.path('/login');
        }
    }
})