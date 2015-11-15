var myApp = angular.module('cardApp', ['ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cards', {
        templateUrl: 'cards/cards.html',
        controller: 'mainCtrl',
        url: '/',
        resolve: {
          cardsRef: function (cardService) {
            return cardService.getCardsRef();
          }
        }
      })
      .state('about', {
        templateUrl: 'about/about.html',
        controller: 'mainCtrl',
        url: '/about'
      })
      .state('new', {
        templateUrl: 'cards/new/new.html',
        controller: 'newCardCtrl',
        url: '/add-card',
        resolve: {
          cardsRef: function (cardService) {
            return cardService.getCardsRef();
          }
        }
      })
      .state('edit', {
        templateUrl: 'cards/edit/edit.html',
        controller: 'editCardCtrl',
        url: '/edit/:cardId',
        resolve: {
          editCardRef: function ($stateParams, cardService) {
            return cardService.getCard($stateParams.cardId);
          }
        }
      });



    $urlRouterProvider.otherwise('/');
  });
