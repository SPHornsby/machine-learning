angular.
    module('app').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<home></home>'
          }).
          when('/problems', {
            template: '<problems></problems>'
          }).
          when('/tutorial/:tutorialId', {
            controller: 'TutorialsController',
            template: '<tutorials></tutorials>'
          }).
          otherwise('/');
      }
    ]);
