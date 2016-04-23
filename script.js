var app = angular.module("agency",['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl',[function(){
        console.log('this is the main ctrl');
    }]);





