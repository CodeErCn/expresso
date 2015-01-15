// require the controller to route url requests to
var users = require('./../server/controllers/users/users.js');

// take URL, and route to correct controller method
module.exports = function Routes(app){
    app.get 	('/',          function(req,res)   { users.index(req,res); });
}