'use strict';

/**
 * @ngdoc function
 * @name mySeatingChartApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mySeatingChartApp
 */
angular.module('mySeatingChartApp')
  .controller('HomeCtrl', function ($scope) {
 //    $scope.model = new go.GraphLinksModel(
	// [
	//   { key: 1, name: "Alpha", color: "lightblue" },
	//   { key: 2, name: "Beta", color: "orange" },
	//   { key: 3, name: "Gamma", color: "lightgreen" },
	//   { key: 4, name: "Delta", color: "pink" }
	// ],
	// [
	//   { from: 1, to: 2 },
	//   { from: 1, to: 3 },
	//   { from: 2, to: 2 },
	//   { from: 3, to: 4 },
	//   { from: 4, to: 1 }
	// ]);
	$scope.guestList = new go.GraphLinksModel([
		{ key: "Tyrion Lannister" },
		{ key: "Daenerys Targaryen", plus: 3 },  // dragons, of course
		{ key: "Jon Snow" },
		{ key: "Stannis Baratheon" },
		{ key: "Arya Stark" },
		{ key: "Jorah Mormont" },
		{ key: "Sandor Clegane" },
		{ key: "Joffrey Baratheon" },
		{ key: "Brienne of Tarth" },
		{ key: "Hodor" }
		]);

	$scope.model = new go.GraphLinksModel([
		{"key":1, "category":"TableR3", "name":"Head 1", "guests":{}, "loc":"143.5 58"},
	{"key":2, "category":"TableR3", "name":"Head 2", "guests":{}, "loc":"324.5 58"},
	{"key":3, "category":"TableR8", "name":"3", "guests":{}, "loc":"121.5 203.5"},
		{"key":4, "category":"TableC8", "name":"4", "guests":{}, "loc":"364.5 223.5"}
	]);
	$scope.model.selectedNodeData = null;
	$scope.replaceModel = function() {
		$scope.model = new go.GraphLinksModel(
			[
			  { key: 11, name: "zeta", color: "red" },
			  { key: 12, name: "eta", color: "green" }
			],
			[
			  { from: 11, to: 12 }
			]
		);
	}
  });
