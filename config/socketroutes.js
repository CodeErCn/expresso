// require the controller to route url requests to
var main = require('./../server/controllers/users/users.js');

// take URL, and route to correct controller method
module.exports = function Routes(app){
    //keep track of connect
    app.io.on('connection', function(req){
        console.log('A user has connected.');
    });
    //keep track of disconnect
    app.io.route('disconnect', function(req){
        console.log('A user has disconnected.');
    });
    //enter a new user into server, by their socket id as identifier of object
    app.io.route('client_sent', function(req){
        console.log(req.data.msg);
        req.io.emit('server_sent', {msg: 'Server emitted.'});
    });
}