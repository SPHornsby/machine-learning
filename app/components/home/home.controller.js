angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    var vm = this;
    vm.list = [
      {name: "binary", url: "img/binary-sm.jpg", alt:"binary"},
      {name: "test", url: "img/head-sm.jpg", alt:"head"},
      {name: "fractal", url: "img/fractal-sm.jpg", alt: "fractal"},
      {name: "geometry", url: "img/geometry-sm.jpg", alt: "geometry"}
     ];
    vm.message = "Examples";
    activate();

    function activate() {

    }


  }
