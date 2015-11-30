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
(function(){
	'use strict';
	
	angular.module('hackathonApp').factory('searchService',searchService);
	
	function searchService(){
	
		var obj = [{
			title:'title1The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition',
			description:'Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration. Each of the rhetorical modes is present in a variety of forms and each has its own purpose and conventions. The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition: The pattern of development that presents a word picture of a thing, a person, a situation, or a series of events.'
		},
		{
			title:'title2The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition',
			description:'Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration. Each of the rhetorical modes is present in a variety of forms and each has its own purpose and conventions. The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition: The pattern of development that presents a word picture of a thing, a person, a situation, or a series of events.'
		},{
			title:'title1The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition',
			description:'Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration. Each of the rhetorical modes is present in a variety of forms and each has its own purpose and conventions. The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition: The pattern of development that presents a word picture of a thing, a person, a situation, or a series of events.'
		},
		{
			title:'title2The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition',
			description:'Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration. Each of the rhetorical modes is present in a variety of forms and each has its own purpose and conventions. The act of description may be related to that of definition. Description is also the fiction-writing mode for transmitting a mental image of the particulars of a story.[citation needed] Definition: The pattern of development that presents a word picture of a thing, a person, a situation, or a series of events.'
		}];
		
		var templateObj = {
			  title: 'CART title',
			  items: [
				{
				  title: 'login detail',
				  description: 'login details description',
				  efforts: 8
				},
				{
				  title: 'Registration detail',
				  description: 'Registration details description',
				  efforts: 16
				},
				{
				  title: 'Items Listing',
				  description: 'Items Listing details',
				  efforts: 24
				},
				{
				  title: 'Add to CART',
				  description: 'add to cart description',
				  efforts: 24
				},
				{
				  title: 'payment',
				  description: 'paymentdetails description',
				  efforts: 30
				}
			  ]
			};
		
		var searchServiceObj = {
			getProjects : getProjects,
			getTemplates : getTemplates
		};
		return searchServiceObj;
		
		function getTemplates(){
			return templateObj;
		}
		
		function getProjects(){
			return obj;
		}
	}
	
})();
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
