require.config({
	// urlArgs: "bust=2015-12-18",
	urlArgs: "bust="+(new Date()).getTime(),
	paths: {
		'jQuery': '../bower_components/jquery/dist/jquery',
		'angular': '../bower_components/angular/angular.min',
		'angular-route': '../bower_components/angular-route/angular-route.min',
		'domReady': '../bower_components/requirejs-domready/domReady',
		'underscore': '../bower_components/underscore/underscore',
		'Base': '../js/extend/base',
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		},
		'underscore': {
			exports: '_'
		},
		'jQuery': {
			exports: '$'
		}
	},

	deps: [
	'./bootstrap'
	]
});
