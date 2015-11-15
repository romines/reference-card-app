angular.module('cardApp')
  .controller('newCardCtrl', ['$scope', '$state', '$firebaseArray', 'cardsRef', function ($scope, $state, $firebaseArray, cardsRef) {

    $scope.cards = $firebaseArray(cardsRef);

    // handle saving new card
    // takes: card object
    //
    $scope.save = function (card) {

      card.tags = listifyTags(card.tags);

      $scope.cards.$add(card);
      $state.go('cards');
    };

    function listifyTags(str) {
      return str.split(/[ ,]+/);
    }

}]);
