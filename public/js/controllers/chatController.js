App.controller('chatController', function($scope, chatFactory) {
    io = io.connect();

    $scope.addMessage = function() {
        $( document ).on('submit', '#message_form', function(e) {   // when messageForm is submitted, event is passed
            e.preventDefault();                                     // prevents event from refreshing the page accidentally
            var newMessage = $scope.user.message;
            $scope.messages.push({
                messageContent: newMessage,
            });
            chatFactory.displayMessages();                          // display messages history
            console.log( chatFactory.displayMessages() );
            io.emit('submitted_new_msg', {                          // emit an event called 'send message'
                msgNotice: 'New message has been received.',
                msgOwner: name,
                msgContent: $('.message_string').val(),
            }); 
            $('.message_string').val('');                           // clear .message_string after emit with empty string
        });
    }

})