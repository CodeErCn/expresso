// put the angular objects moduel in variable
var App = angular.module('App', ['ngRoute']);

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
		.when('/chat',
		{
			templateUrl: '/clientviews/partials/chat.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
