var myApp = angular.module('cardApp', ['ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cards', {
        templateUrl: 'cards/cards.html',
        controller: 'mainCtrl',
        url: '/',
        resolve: {
          cards: function ($firebaseArray) {
            var cardsRef = new Firebase('https://reference-cards-app.firebaseio.com/cards')
            cards = $firebaseArray(cardsRef);
            return cards.$loaded().then(function (data) {
              return data;
            });
          }
        }
      })
      .state('about', {
        templateUrl: 'about/about.html',
        controller: 'mainCtrl',
        url: '/about'
      })
      .state('new', {
        templateUrl: 'cards/new.html',
        controller: 'mainCtrl',
        url: '/add-card',
        resolve: {
          cards: function ($firebaseArray) {
            var cardsRef = new Firebase('https://reference-cards-app.firebaseio.com/cards')
            cards = $firebaseArray(cardsRef);
            return cards.$loaded().then(function (data) {
              return data;
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });
