// require the controller to route url requests to
var users = require('./../server/controllers/users/users.js');

// take URL, and route to correct controller method
module.exports = function Routes(app){
    app.get('/',          			function(req, res) { users.index(req, res); 	});
    app.get('/users',               function(req, res) { users.show_all(req, res);	});
    app.get('/users/:id',         	function(req, res) { users.show(req, res); 		});
    app.post('/users/new',         	function(req, res) { users.create(req, res); 	});
    app.post('/users/:id',          function(req, res) { users.update(req, res);	});
    app.post('/login',        		function(req, res) { users.login(req, res);		});
    app.post('/addChosen',        	function(req, res) { users.addChosen(req,res);	});
    app.post('/getAllChosen',       function(req, res) { users.getAllChosen(req,res);});
    app.post('/uploadFile/:id',     function(req, res) { users.uploadFile(req,res);	});
}