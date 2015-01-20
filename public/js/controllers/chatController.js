App.controller('chatController', function($scope, chatFactory) {
    io = io.connect();
    $scope.messages = {};

    $scope.addMessage = function() {
        chatFactory.displayMsgHistory();                          // display messages history
        chatFactory.pushMessage($scope.user.message);                  // store new message in messages obj
        $('.chat_history').append(
            '<div class="text-right alert alert-default">' + $scope.user.message + ' <img src="http://ftape.com/model/wp-content/uploads/2011/03/Hannah-Kern-Elite-Models-London-The-Model-Wall_0.jpg" alt="{{ user.like_name }}" class="img-rounded img-icon"></div>');
        $('.message_string').val('');                           // clear .message_string after emit with empty string
    };
});

// Kept for CSS Template:
// <div class="text-left alert alert-success"> 
//     <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="{{ user.like_name }}" class="img-rounded img-icon">
//     Thanks for the add!
// </div>