angular
    .module("app")
    .directive("topbar", function() {
      return {
        restrict: "E",
        templateUrl: 'app/layout/topbar.html'
      };
    });
