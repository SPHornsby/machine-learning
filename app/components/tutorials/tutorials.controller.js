angular
    .module('app')
    .controller('TutorialsController', TutorialsController);

TutorialsController.$inject = ['$routeParams', '$http'];

function TutorialsController($routeParams, $http) {
  var vm = this;
  vm.params = $routeParams.tutorialId;
  vm.message = 'Message';
  vm.title = 'Example Problem Title';

  var url = '/examples/' + vm.params;
  activate();

  function activate() {
    getFractal();
  }

  function getFractal() {
    return $http.get(url)
      .then(function(response) {
        var data = response.data[0];
        vm.message = data.text;
        vm.title = data.name;
        vm.img = data.url;
      })
      .catch();
  }
}
