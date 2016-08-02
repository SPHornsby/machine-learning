angular
    .module('app')
    .controller('TutorialsController', TutorialsController);

TutorialsController.$inject = ['$routeParams', '$http'];

function TutorialsController($routeParams, $http) {
  var vm = this;
  vm.params = $routeParams.tutorialId;
  vm.message = 'Message';
  vm.title = 'Example Problem Title';

  var url = '/tutorials/' + vm.params;
  activate();

  function activate() {
    getFractal();
  }

  function getFractal() {
    return $http.get(url)
      .then(function(response) {
        var data = response.data[0];
        vm.title = data.name;
        vm.intro = data.intro;
        vm.content = data.content;
        vm.demo = data.demo;
        vm.scripts = data.scripts;
      })
      .catch();
  }
}
