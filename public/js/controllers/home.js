angular.module('MainController', ['ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/repos', {
                templateUrl: '../../templates/posts/index.html',
                controller: 'ReposController',
                controllerAs: 'ReposCtrl'

            })
            .when('/inicio', {
                templateUrl: '../../templates/inicio/index.html'
            });
    });