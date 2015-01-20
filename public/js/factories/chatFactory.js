App.factory('chatFactory', function() {
    var messages = {};
    var users = {
        id:             null,
        email:          null,
        content:        null,
        date:           Date.now(),
    }

    return {
        displayMsgHistory: function() {
            var messageHistory = messages;
            return messageHistory;
        },
        pushMessage: function(message) {
            users.content = message;
        },

    }
})