(function(){
	
	'use strict';
	
	angular.module('hackathonApp').controller('templatesListingCtrl',templatesListingCtrl);
	
	templatesListingCtrl.$inject = ['searchService'];
	
	function templatesListingCtrl(searchService){
		
		/*jshint validthis:true */
		var vm = this;
		
		//methods
		
		init();
		vm.getWidth = getWidth;
		
		function getWidth(width){
			return (width*3) + '%';
		}
		
		function init(){
			vm.templateResult = searchService.getTemplates();
		}
		
	}

})();
