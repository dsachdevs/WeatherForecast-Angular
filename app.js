//module
var weatherApp = angular.module('weatherApp',['ngRoute', 'ngResource']);

weatherApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

