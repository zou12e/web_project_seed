define([
  'angular',
  'angular-route',
  './controllers/index',
  './directives/index',
  './filters/index',
  './services/index'
  ], function (angular) {
    var app = angular.module('app', [
      'app.controllers',
      'app.directives',
      'app.filters',
      'app.services',
      'ngRoute'
      ]);
    
    app.run(['$rootScope','$location', 'Api', function ($rootScope,$location, Api) {


    }]);

    return app;
  });
