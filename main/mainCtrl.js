angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state', 'cards', function ($scope, $firebaseObject, $firebaseArray, $state, cards) {
    // put isolate scope cards (via resolve) on $scope
    $scope.cards = cards;
    
    // handle saving new card
    // takes: card object
    //
    $scope.save = function (card) {
      var formDefaults = {
        title: '',
        content: '',
        tags: '',
        code: true
      };
      var newCard = angular.copy(card);
      cards.$add(newCard);
      $scope.card = formDefaults;
      $scope.cardForm.$setPristine();
      $state.go('cards');
    };

}]);