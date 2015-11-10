var myApp = angular.module('cardApp', ['ui.router', 'firebase'])
  .config(function($stateProvider, $urlRouterProvider) {
      // comment, yo
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
