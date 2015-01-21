App.controller('chatController', function($scope, chatFactory, sharedProperties) {
    $scope.allMessages = [];
    // $scope.userList = [];
    $scope.user = sharedProperties.getProperty();
    io = io.connect();
    io.emit('connection', { 'name': $scope.user.username });
    $scope.addNew = function(newMsg) {
        var newMsg = { user: $scope.user.username, message: newMsg };
        io.emit('msgSubmit', newMsg);
        $scope.allMessages.push(newMsg);  
    };
    // someone else has submitted a message, update your messages list
    io.on('serverMsgUpdate', function(msg){
        $scope.$apply(function () {
            $scope.allMessages.push(msg); 
        });     
    });
    // get all messages and all users at the start
    io.on('get_all_start', function(userList){
        $scope.$apply(function () {
            $scope.userList = userList.userList;
        });     
    });
    // when new user logs in, get their login
    io.on('server_added_user', function(newbie){
        $scope.$apply(function () {     
            var stringMsg = newbie.user.name + 'has joined the chat.'
            var newMsg = { user: 'Notice', message: stringMsg };
            $scope.allMessages.push(newMsg);            
            $scope.userList.push(newbie.user);
        }); 
    });
    // when user disconnects, notify
    io.on('server_deleted_user', function(info){
        $scope.$apply(function () {     
            var stringMsg = info.user + 'has left the chat.'
            var newMsg = { user: 'Notice', message: stringMsg };
            $scope.allMessages.push(newMsg);            
            $scope.userList = info.newList;
        }); 
    });
})