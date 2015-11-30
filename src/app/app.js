(function(){

	'use strict';
	
	angular.module('hackathonApp',[
		'ngRoute',
		'templateModule'
	]).config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'appsearch/search.html',
			controller:'searchCtrl',
			controllerAs:'vm'
		})
		.when('/templates',{
			templateUrl:'appsearch/templates.html',
			controller:'templatesListingCtrl',
			controllerAs:'vm'
		});
	}).run(function($rootScope){
		$rootScope.buzyLoading = false;
	});
})();