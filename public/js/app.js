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
   .factory("Exercise", [
     "resource",
     Exercise
   ])
   .factory("Blog",[
     "$resource",
     Blog
   ])
  .controller ("BlogIndexCtrl",[
    "$state",
    "Blog",
    BlogIndexController
  ])
  .controller ("BlogShowCtrl",[
    "$state",
    "Blog",
    BlogShowController
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

//router functions
function Router ($stateProvider, $urlRouterProvider) {
   $stateProvider
  .state("welcome", {
       url: "",
       templateUrl: "/assets/js/ng-views/welcome.html",
       controller: "welcomeCtrl",
       controllerAs: "vm"
     })
  .state("index", {
    url: '/programs',
    templateUrl: "/assets/js/ng-views/program/index.html",
    controller: "indexCtrl",
    controllerAs: "vm"
  })
  .state("show", {
    url: '/programs/:name',
    templateUrl: "/assets/js/ng-views/program/show.html",
    controller: "showCtrl",
    controllerAs: "vm"
  })
  .state("ExerciseShow", {
    url: '/exercises/:name',
    templateUrl: "/assets/js/ng-views/exercise/show.html",
    controller: "ExShowCtrl",
    controllerAs: "vm"
  })
  .state("BlogShow", {
    url: '/blogs/:title',
    templateUrl: "/assets/js/ng-views/blog/show.html",
    controller: "BlogShowCtrl",
    controllerAs: "vm"
  })
  .state("BlogIndex", {
    url: '/blogs',
    templateUrl: "/assets/js/ng-views/blog/index.html",
    controller: "BlogIndexCtrl",
    controllerAs: "vm"
  })
}

// Program functions
function Program($resource){
  return $resource("/api/programs/:name", {}, {
    update: {method: "PUT"}
  })
}
function welcomeController (){}
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

//exercise functions
function Exercise($resource){
  return $resource("/api/exercises/:name", {}, {
    update: {method: "PUT"}
  })
}
function ExShowController($state, $stateParams, Exercise){
  this.exercise = Exercise.get({name: $stateParams.name})
  this.update = function(){
    this.exercise.$update({name: $stateParams.name})
  }
  this.destroy = function(){
    this.exercise.$delete({name: $stateParams.name}).then(function(){
      $state.go("index")
    })
  }
  }

//blog functions
function Blog ($resource){
  return $resource("/api/blogs/:title", {}, {
    update: {method: "PUT"}
  })
}
function BlogIndexController($state, Blog){
  this.blogs = Blog.query()
  this.newBlog = new Blog()
  this.create = function(){
    this.newBlog.$save().then(function(blog){
      $state.go("show", {title: blog.title})
    })
  }
}
function BlogShowController($state, $stateParams, Blog){
  this.blog = Blog.get({title: $stateParams.title})
  this.update = function(){
    this.blog.$update({title: $stateParams.title})
  }
  this.destroy = function(){
    this.blog.$delete({title: $stateParams.title}).then(function(){
      $state.go("index")
    })
  }
}
