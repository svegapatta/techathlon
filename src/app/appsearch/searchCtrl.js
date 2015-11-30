(function(){
	'use strict';
	
	angular.module('hackathonApp').controller('searchCtrl',searchCtrl);
	
	searchCtrl.$inject = ['$rootScope','searchService','$timeout'];
	
	function searchCtrl($rootScope,searchService,$timeout){
	
		/*jshint validthis:true */
		var vm = this;
		
		//methods
		vm.search = search;
		
		function search(){
			$rootScope.buzyLoading =true;
			/*searchService.getProjects(vm.name).then(function(data){
				debugger;
			});*/
			vm.searchResult = searchService.getProjects(vm.name);
			$timeout(function(){
				$rootScope.buzyLoading =false;
			},2000);
		}
	}
	
})();