angular
    .module('app')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$http'];

function HomeController($http) {
  var vm = this;
  vm.list = [
    // {name: 'binary', url: 'img/binary-sm.jpg', alt:'binary'},
    // {name: 'test', url: 'img/head-sm.jpg', alt:'head'},
    // {name: 'fractal', url: 'img/fractal-sm.jpg', alt: 'fractal'},
    // {name: 'geometry', url: 'img/geometry-sm.jpg', alt: 'geometry'}
   ];
  vm.message = 'Examples';
  activate();

  function activate() {
    vm.list = getTopics();
  }

  function getTopics() {
    return $http.get('http://localhost:8000/problems/all')
      .then(function(response) {
        vm.list = response.data;
      })
      .catch();
  }
}
