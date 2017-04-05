'use strict';

/**
 * @ngdoc function
 * @name mySeatingChartApp.controller:MyspaceCtrl
 * @description
 * # MyspaceCtrl
 * Controller of the mySeatingChartApp
 */
angular.module('mySeatingChartApp')
  .controller('MyspaceCtrl', function ($scope, $location) {
    $scope.events = [
  	{
  		id: '1',
  		name: 'Event 1',
  		place: 'Place 1',
  		date: '10/01/2017',
  		seatsNb: '400'
  	},
  	{
  		id: '2',
  		name: 'Event 2',
  		place: 'Place 2',
  		date: '10/01/2017',
  		seatsNb: '200'
  	}];

    $scope.goToRoom = function(event) {
    	$location.path("/home");
    };
  });
