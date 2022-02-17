angular.module('myapp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'Single/home.html',
            controller: 'homectrl'
        }).when('/home/:first/:last', {
            templateUrl: 'Single/home.html',
            controller: 'homectrl'
        }).when('/User', {
            templateUrl: 'Single/User.html',
            controller: 'userctrl'
        }).when('/Employee', {
            templateUrl: 'Single/Employee.html',
            controller: 'Employeectrl'
        }).when('/traking', {
            templateUrl: 'Single/traking.html',
            controller: 'trackctrl'
        })
    })
    .controller('myctrl', function() {

    })
    .controller("homectrl", function($scope, $routeParams) {
        $scope.message = "Home Page"
        if ($routeParams.first && $routeParams.last) {
            $scope.person = {
                first: $routeParams.first,
                last: $routeParams.last
            };
        }
    })
    .controller("userctrl", function($scope, $http) {
        $http.get('User.json')
            .success(function(response) {
                $scope.users = response.users;
            });
    })
    .controller("Employeectrl", function($scope, $http) {
        $http.get('Employee.json')
            .success(function(response) {
                $scope.Employees = response.records;
            });
    })
    .controller("trackctrl", function($scope, $http) {
        $http.get('traking.json')
            .success(function(response) {
                $scope.trains = response.trains;
            });
    });