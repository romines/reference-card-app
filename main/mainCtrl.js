angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state', 'cards', 'processTags', function ($scope, $firebaseObject, $firebaseArray, $state, cards, processTags) {
    $scope.appState = $state;

    // put isolate scope cards (via resolve) on $scope
    $scope.cards = cards.data;

    function listifyTags(str) {
      return str.split(/[ ,]+/);
    }

    $scope.edit = function(cardId) {
      console.log(cardId);
    }

    $scope.cloud = processTags.buildCloud(cards.data);

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
      newCard.tags = listifyTags(newCard.tags);
      cards.data.$add(newCard);
      $scope.card = formDefaults;
      $scope.cardForm.$setPristine();
      $state.go('cards');
    };

    $scope.updateFilter = function(tagName) {
      $scope.cardFilter = tagName;
    }

}]);
