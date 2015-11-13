angular.module('cardApp')
  .service('cardService', function () {
    var cardsUrl = 'https://reference-cards-app.firebaseio.com/cards/';

    this.getCards = function (cardId) {

      return new Firebase(cardsUrl + cardId);

    }

  })
