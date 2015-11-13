angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state', 'cards', 'processTag', function ($scope, $firebaseObject, $firebaseArray, $state, cards, processTag) {
    // put isolate scope cards (via resolve) on $scope
    $scope.cards = cards.data;

    function once() {
      angular.forEach(cards.data, function (card) {
        var cardId = card.$id;
        var cardToUpdate = cards.data.$getRecord(cardId);
        var tagString = cardToUpdate.tags;
        // console.log(tagString);
        // console.log(listifyTags(tagString));
        cardToUpdate.tags = listifyTags(tagString);
        cards.data.$save(cardToUpdate);
      });
    }

    // once();

    function listifyTags(str) {
      return str.split(/[ ,]+/);
    }

    $scope.edit = function(cardId) {
      console.log(cardId);
    }
    // var once = function (collection) {
    //   for (card in collection) {
    //     card.update({
    //       "tags": listifyTags(card)});
    //   }
    // }
    // once($scope.cards);

    // var cloud = processTag.buildCloud($scope.cards);
    // console.log ('cloud: ', cloud)

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
      newCard = listifyTags(newCard);
      cards.$add(newCard);
      $scope.card = formDefaults;
      $scope.cardForm.$setPristine();
      $state.go('cards');
    };

    $scope.updateFilter = function(tagName) {
      $scope.cardFilter = tagName;
    }

}]);
