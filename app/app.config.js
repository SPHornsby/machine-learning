angular.
    module('app').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<topbar></topbar><home></home>'
          }).
          when('/problems', {
            template: '<topbar></topbar><problems></problems>'
          }).
          when('/tutorial/:tutorialId', {
            controller: 'TutorialsController',
            template: '<topbar></topbar><tutorials></tutorials>'
          }).
          otherwise('/');
      }
    ]);
