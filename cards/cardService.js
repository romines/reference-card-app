angular.module('cardApp')
  .service('cardService', ['$firebaseArray', function($firebaseArray) {

    var cardsRef = new Firebase('https://reference-cards-app.firebaseio.com/cards')
    cards = $firebaseArray(cardsRef)
    
    $scope.cards = cards;
      
    $scope.save = function(card) {
      var formDefaults = {
        title: '',
        content: '',
        tags: ''
      };


      var newCard = angular.copy(card);
      cards.$add(newCard);
      $scope.card = formDefaults;
      $scope.cardForm.$setPristine();
    };
      

  }]);
