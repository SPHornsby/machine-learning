angular
    .module("app")
    .directive("home", function() {
      return {
        restrict: "E",
        templateUrl: '/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      };
    });
