// put the angular objects moduel in variable
var App = angular.module('App', ['ngRoute', 'angularFileUpload'])
	.service('sharedProperties', function () {
	        var property = {};
	        var browse = {};
	        var hotty = {};
	        return {
	            getProperty: function () {
	                return property;
	            },
	            setProperty: function(value) {
	                property = value;
	            },
	            getAll: function () {
	                return browse;
	            },
	            setAll: function (value) {
	                browse = value;
	            },
	            getHotty: function () {
	            	return hotty;
	            },
	            setHotty: function (value) {
	            		hotty = value;
	            },
	        };
	    });

App.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: '/clientviews/partials/loginregister.html'
		})
		.when('/login',
		{
			templateUrl: '/clientviews/partials/login.html'
		})
		.when('/gender',
		{
			templateUrl: '/clientviews/partials/gender.html'
		})
		.when('/seeking',
		{
			templateUrl: '/clientviews/partials/seeking.html'
		})
		.when('/interest',
		{
			templateUrl: '/clientviews/partials/interest.html'
		})
		.when('/birthday',
		{
			templateUrl: '/clientviews/partials/birthday.html'
		})
		.when('/main',
		{
			templateUrl: '/clientviews/partials/main.html'
		})
		.when('/edit',
		{
			templateUrl: '/clientviews/partials/edit.html'
		})
		.when('/browse',
		{
			templateUrl: '/clientviews/partials/browse.html'
		})
		.when('/register',
		{
			templateUrl: '/clientviews/partials/register.html'
		})
		.when('/chat',
		{
			templateUrl: '/clientviews/partials/chat.html'
		})
		.when('/createtester',
		{
			templateUrl: '/clientviews/partials/createtester.html'
		})
		.when('/hotty',
		{
			templateUrl: '/clientviews/partials/hotty.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
