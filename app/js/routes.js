define(['./app'], function (app) {
  'use strict';
  return app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/index', {
        templateUrl: '/html/index.html',
        controller: 'IndexCtrl',
        title: '主页'
      }).
      otherwise({
        redirectTo: '/index'
      });
    }]);
});
