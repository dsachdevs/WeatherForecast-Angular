//Directives
weatherApp.directive('weatherReport', function () {
	/* body... */
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.htm',
		replace: true,
		scope: {
			weatherDay:"=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"	
		}
	}
})