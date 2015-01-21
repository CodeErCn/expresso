App.controller('registerCtrl', function($scope, $location, registerFty) {
  
    var interest = {
        Singing: false,
        Crying: false,
        Biking: false,
        Assassinating: false,
        Firefly: false,
        Eating: false
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
        if(interest.Singing === true){
            interest.Singing = false;
        } else {
            interest.Singing = true;
        }
    });

    $('a.crying').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.Crying === true){
            interest.Crying = false;
        } else {
            interest.Crying = true;
        }
    });

    $('a.biking').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.Biking === true){
            interest.Biking = false;
        } else {
            interest.Biking = true;
        }
    });

    $('a.assassine').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.Assassinating === true){
            interest.Assassinating = false;
        } else {
            interest.Assassinating = true;
        }
    });

    $('a.firefly').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.Firefly === true){
            interest.Firefly = false;
        } else {
            interest.Firefly = true;
        }

    });

    $('a.eating').on('click', function() {
        $(this).children('span').toggleClass('green');
        if(interest.Eating === true){
            interest.Eating = false;
        } else {
            interest.Eating = true;
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