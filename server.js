var express = require('express.io');                        // require express-socket.io module
var path = require('path');                                 // path: contains the URL to your root
var config = require('./config/config');                    // config: link to your db here
var app = express().http().io();                            // instantiate your app with http and io


app.configure(function() {                                  // configuring app

    // var cookieParser = require('cookie-parser');
    app.use(express.cookieParser());

    // app.use(express.session( { secret: 'ninja' }));

    // var bodyParser = require('body-parser');
    app.use(express.json());                                // handles POST data                          
    app.use(express.urlencoded({ extended: true }));        // handles POST data 

    //app.use(favicon(__dirname + '/public/favicon.ico'));  // uncomment after placing your favicon in /public

    app.use(express.static(path.join(__dirname, 'public')));// Look into public folder for any files referenced
    app.use(express.static(path.join(__dirname, 'server/controllers')));
    app.set('views', path.join(__dirname, 'public/clientviews')); // goes to root/server/views for your views
    app.set('view engine', 'ejs');                          // use ejs to compile the view
    
});

var mongoose = require('./config/mongoose');                // require mongoose module, which speaks between node and mongoDB
var routes = require('./config/ajaxroutes')(app);           // pass app into any routes/links for routing gets and posts
var socket = require('./config/socketroutes')(app);         // pass app into any routes/links for routing socket io
app.set('port', process.env.PORT || 1234);                  // If port is not set, set it to 6789                        
app.listen(app.get('port'), function() {                    // Listen to the port that has been set

console.log('\n*************************************************************************');
console.log('**********                                                     **********');
console.log('**********                                                     **********');
console.log('**********        Express.io server listening on port ' + app.get('port') + '     **********');                               
console.log('**********                                                     **********');
console.log('**********                                                     **********');
console.log('*************************************************************************\n');
});
