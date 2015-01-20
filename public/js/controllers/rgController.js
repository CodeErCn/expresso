App.controller('registerCtrl', function($scope, $location, registerFty) {
  
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
    console.log('seeking '+genderS);
      if(genderS===undefined) {
        alert("What you are looking for is very important to us!!");
      } else {
        registerFty.addSeeking(genderS);
        $location.path('/interest');
      } 
  };

  





})