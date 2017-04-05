'use strict';

/**
 * @ngdoc overview
 * @name mySeatingChartApp
 * @description
 * # mySeatingChartApp
 *
 * Main module of the application.
 */
angular
  .module('mySeatingChartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/howitwork', {
        templateUrl: 'views/howitwork.html',
        controller: 'HowitworkCtrl',
        controllerAs: 'howitwork'
      })
      .when('/ourservices', {
        templateUrl: 'views/ourservices.html',
        controller: 'OurservicesCtrl',
        controllerAs: 'ourservices'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
        controllerAs: 'contactus'
      })
      .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'AboutusCtrl',
        controllerAs: 'aboutus'
      })
      .when('/myspace', {
        templateUrl: 'views/myspace.html',
        controller: 'MyspaceCtrl',
        controllerAs: 'myspace'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
