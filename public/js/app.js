console.log('app.js connected')

angular
  .module('battleship', [
  "ngResource",
  "ui.router"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
    Router
  ])
  .controller("GameController", [
    GameControllerFunction
  ])

  function GameControllerFunction() {

  }

  function Router($stateProvider, $locationProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true)
    $stateProvider
      .state("game", {
        url: "/",
        templateUrl: "/assets/js/ng-views/game.html",
        controller: "GameController",
        controllerAs: "vm"
      })
    $urlRouterProvider.otherwise("/")
  }
