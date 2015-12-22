define(['angular','jQuery','Base'], function (ng,$,base) {
	ng.module('app.filters', [])
	.filter('decimal_2', function() {
		return function(txt) {
			return (parseFloat(txt)).toFixed(2);
		};
	}).filter('abs', function() {
		return function(txt) {
			return Math.abs(txt);
		};
	});
});