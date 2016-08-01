angular
    .module("app")
    .directive("topnav", function() {
      return {
        restrict: "E",
        templateUrl: 'app/layout/topnav.html'
      };
    });
