App.controller('registerCtrl', function($scope, registerFty) {
  
  $scope.getStarted = function() {
    console.log('get Started in controller');
    registerFty.addNewUser();
  }

  $scope.addGender = function() {
    $(document).on('click', 'a.btn', function() {
      console.log('here');
      registerFty.addGender($('input[type="radio"]:checked').val());
    })
  }


})