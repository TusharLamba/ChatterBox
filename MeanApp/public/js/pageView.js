/**
 * Created by tushar on 19/6/17.
 */
var pageView = angular.module('pageView', ['ui.router']);

pageView.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../html/home.html'
        })
        .state('login',
            url: '/login',
            templateUrl: '../html/login.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: '../html/register.html'
        });
});

pageView.controller('btnCtrl', function ($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.check = function () {
        if ($scope.username == "" || $scope.password == "")
            return true;
        else return false;
    };
});

