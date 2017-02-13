var teamNest = angular.module('teamNest',['ngResource','ngRoute','ngAnimate']);

teamNest.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'loginCtrl',
          controllerAs: 'login'
        })
        .when('/dashboard', {
          templateUrl: 'views/dashboard.html',
          controller: 'dashboardCtrl',
          controllerAs: 'dashboard'
        })
      .otherwise({ redirectTo: '/' });

      $locationProvider.html5Mode(true);
      
  }])

teamNest.controller('MainCtrl', ['$scope','$route', '$routeParams', '$location',
    function MainCtrl($scope,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
        
    
  }])


