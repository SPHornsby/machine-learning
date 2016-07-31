angular
    .module("app")
    .directive("home", function() {
      return {
        restrict: "E",
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      };
    });
