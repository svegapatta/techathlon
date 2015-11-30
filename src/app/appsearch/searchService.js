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