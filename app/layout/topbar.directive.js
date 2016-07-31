angular
    .module("app")
    .directive("topbar", function() {
      return {
        restrict: "E",
        templateUrl: '/layout/topbar.html'
      };
    });
