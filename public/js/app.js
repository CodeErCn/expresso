// put the angular objects moduel in variable
var App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: '/clientviews/partials/part.html'
		})
		.when('/part',
		{
			templateUrl: '/clientviews/partials/part.html'
		})
		.when('/partb',
		{
			templateUrl: '/clientviews/partials/partb.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
