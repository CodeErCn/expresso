// require the controller to route url requests to
var users = require('./../server/controllers/users/users.js');

// take URL, and route to correct controller method
module.exports = function Routes(app){
    app.get('/',          			function(req, res) { users.index(req, res); 	});
    app.get('/users',               function(req, res) { users.show_all(req, res);	});
    app.get('/users/:id',         	function(req, res) { users.show(req, res); 		});
    app.post('/users/new',         	function(req, res) { users.create(req, res); 	});
    app.post('/users/:id',           function(req, res) { users.update(req, res);	});
    app.get('/files',           	function(req, res) { files.download(req, res);	});
    app.post('/files',         		function(req, res) { files.upload(req, res);	});
}