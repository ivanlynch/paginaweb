angular.module('MainController')
.controller('ReposController', function($scope, $http){
    var controller = this;
    $http({ method: 'GET', url: 'https://api.github.com/users/ivanlynch/repos'}).success(function(data){
        controller.repos = data;
    });
});