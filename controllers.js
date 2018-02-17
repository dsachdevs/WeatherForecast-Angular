//Controllersa
weatherApp.controller('homeCntrl', ['$scope','forecast', function($scope,forecast) {

	$scope.city=forecast.city;

	$scope.$watch('city', function(){
		forecast.city=$scope.city;
	});

}]);

weatherApp.controller('weatherCntrl', ['$scope','forecast', '$resource', '$routeParams', function($scope,forecast,$resource, $routeParams) {
	 
	 $scope.city=forecast.city;

	 $scope.days=$routeParams.days||'2' ;

	 $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast', {q:$scope.city, cnt:$scope.days, appid: '1fe032aaf864ee5472f2430280ff75f6'});
	 $scope.result =  $scope.weatherAPI.get(function() { });

	 $scope.cnvtToF = function (degK) {
	 	/* body... */
	 	return Math.round((1.8 * (degK -273)) + 32);
	 }

	 $scope.cnvtToDate = function (dt) {
	 	/* body... */
	 	return new Date(dt*1000);
	 }

}]);