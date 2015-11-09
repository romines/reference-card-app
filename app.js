var myApp = angular.module('cardApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cards', {
        templateUrl: 'cards/cards.html',
        controller: 'mainCtrl',
        url: '/'
      })
      .state('about', {
        templateUrl: 'about/about.html',
        controller: 'mainCtrl',
        url: '/about'
      })
      .state('new', {
        templateUrl: 'cards/new.html',
        controller: 'mainCtrl',
        url: '/add-card'
      });

    $urlRouterProvider.otherwise('/');
  });
