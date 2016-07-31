angular
    .module("app")
    .directive("example", function() {
      return {
        restrict: "E",
        templateUrl: '/components/home/example.html'
      };
    });
