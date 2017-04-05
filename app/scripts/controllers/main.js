'use strict';

/**
 * @ngdoc function
 * @name mySeatingChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mySeatingChartApp
 */
angular.module('mySeatingChartApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope) {
  	if($rootScope.loggedUser) {
  		$location.path("/myspace");
  	}

    $scope.submitLogin = function(user) {
		if(user.email.length > 0 && user.pwd.length > 0) { // test de verification
			// submitForm("${pageContext.request.contextPath}/j_spring_security_check", "j_username", document.getElementById("username").value, "j_password", document.getElementById("password").value, "notracker", g_notracker, "nogoogletracker", g_nogoogletracker, "noannalect", g_noannalect);
			$rootScope.loggedUser = $scope.user.email;
			$location.path("/myspace");
		}
	};
  })
  .controller('headerCtrl', function ($scope, $rootScope) {
  });
