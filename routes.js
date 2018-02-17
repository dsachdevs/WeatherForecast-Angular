//Routes
weatherApp.config(function($routeProvider){

	$routeProvider
	.when("/", {
		templateUrl : "pages/home.htm",
		controller : "homeCntrl"
	})

	.when("/weather", {
		templateUrl : "pages/weather.htm",
		controller : "weatherCntrl"
	})

	.when("/weather/:days", {
		templateUrl : "pages/weather.htm",
		controller : "weatherCntrl"
	})

});