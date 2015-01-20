angular.module('contatooh',['ngRoute', 'ngResource'])
  .config(function($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contato.html', 
    	controller: 'ContatoController'
    });

    $routeProvider.when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html', 
      controller: 'ContatoController'
    });

    $routeProvider.when('/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    $routeProvider.when('/auth', {
      templateUrl: 'partials/auth.html'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'});
});