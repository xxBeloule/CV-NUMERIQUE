//declaration de l'app
var cvAPP = angular.module('CvApplication', ['ngRoute']);
cvAPP.run(function ($rootScope, $http, $rootScope) {
});
//config des routes
cvAPP.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'homeController',
            templateUrl: 'assets/partials/home.html'
        })
        .when('/exp', {
            controller: 'expController',
            templateUrl: 'assets/partials/experience.html'
        })
        .when('/form', {
            controller: 'formController',
            templateUrl: 'assets/partials/form.html'
        })
        .when('/contact', {
            controller: 'contactController',
            templateUrl: 'assets/partials/contact.html'
        })
        .when('/projects', {
            controller: 'projectsController',
            templateUrl: 'assets/partials/projects.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
