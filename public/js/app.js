angular
  .module ("fit2",[
    "ui.router",
    "ngResource"
  ])
  .config([
     "$stateProvider",
     Router
   ])
  .factory("Program", [
   "$resource",
   Program
 ])
 .controller("welcomeCtrl", [
  "$state",
  "Program",
  welcomeController
])
 .controller("indexCtrl", [
  "$state",
  "Program",
  indexController
])
.controller("showCtrl", [
  "$state",
  "$stateParams",
  "Program",
  showController
])

function Router ($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state("welcome", {
       url: "/",
       templateUrl: "/assets/js/ng-views/welcome.html",
       controller: "welcomeCtrl",
       controllerAs: "vm"
     })
  .state("index", {
    url: '/programs',
    templateUrl: "/assets/js/ng-views/index.html",
    controller: "indexCtrl",
    controllerAs: "vm"
  })
  .state("show", {
    url: '/programs/:name',
    templateUrl: "/assets/js/ng-views/show.html",
    controller: "showCtrl",
    controllerAs: "vm"
  })
}

function Program($resource){
  return $resource("/api/programs/:name", {}, {
    update: {method: "PUT"}
  })
}

function welcomeController (){
  console.log("your in the welcome controller")
}

function indexController ($state, Program) {
  this.programs = Program.query()
  this.newProgram = new Program()
  this.create = function(){
    this.newProgram.$save().then(function(program){
      $state.go("show", {name: program.name})
    })
  }
}

function showController($state, $stateParams, Program){
  this.program = Program.get({name: $stateParams.name})
  this.update = function(){
    this.program.$update({name: $stateParams.name})
  }
  this.destroy = function(){
    this.program.$delete({name: $stateParams.name}).then(function(){
      $state.go("index")
    })
  }
}
