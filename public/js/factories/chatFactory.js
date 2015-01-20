App.factory('chatFactory', function() {
    var messages = [];
    var message = {
        id:             null,
        username:       null,
        content:        null,
        date:           Date.now(),
    }

    return {
        displayMessages: function() {
            var messageHistory = messages;
            console.log(messageHistory);
        },
        pushMessage: function(message) {
            newUser.message = message;
            console.log(newUser)
        },

    }
})