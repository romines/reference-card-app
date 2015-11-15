angular.module('cardApp')
  .service('cardService', ['$firebaseArray', function ($firebaseArray) {
    var cardsUrl = 'https://reference-cards-app.firebaseio.com/cards/';


    this.getCardsRef = function () {

      var cardsRef = new Firebase(cardsUrl);
      return cardsRef;

    };

    this.getCard = function (cardId) {
      return new Firebase(cardsUrl + cardId);
    };

  }])
