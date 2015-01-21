// require the controller to route url requests to
var main = require('./../server/controllers/users/users.js');

// take URL, and route to correct controller method
module.exports = function Routes(app){
    if ('undefined' === typeof allMessages) {
        var allMessages = [];
    };
    if ('undefined' === typeof userList) {
        var userList = [];
    };
    app.io.route('connection', function(req){
        console.log('user has connected');
        var newbie = { socket: req.socket.id, name: req.data.name };
        userList.push(newbie);
        console.log(userList);
        req.io.broadcast('server_added_user', {'user': newbie});
        req.io.emit('get_all_start', { userList: userList });
    })
    //keep track of disconnect
    app.io.route('disconnect', function(req){
        for (var i = 0; i < userList.length; i++) {
            if(userList[i].socket == req.socket.id)
            {
                var idx = i;
            }
        };
        if(userList.length && typeof idx !== 'undefined'){
            var leaver = userList[idx].name;
            userList.splice(idx, 1);
            req.io.broadcast('server_deleted_user', { 'user': leaver, 'newList': userList });
        }
    });
    //enter a new user into server, by their socket id as identifier of object
    app.io.route('msgSubmit', function(req){
        allMessages.push(req.data);
        // req.io.emit('get_all_start', allMessages: allMessages, socket: req.socket.id});
        //update everyone else on the new user who entered
        req.io.broadcast('serverMsgUpdate', req.data);
    });
}