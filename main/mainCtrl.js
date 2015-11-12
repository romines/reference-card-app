angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state', 'cards', 'processTag', function ($scope, $firebaseObject, $firebaseArray, $state, cards, processTag) {
    // put isolate scope cards (via resolve) on $scope
    $scope.cards = cards.data;

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

    var listifyTags = function (card) {
      if (card.tags) {
      // var tagsArray = card.tags.split(/[ ,]+/);
      // card.tags = tagsArray;
      console.log(card.tags)
    // } else {
    //   card.tags = [];
    }
    //   return card;

    }

    $scope.tags = [
      {
        name: 'red',
        num: 50,
        weight: 0
      },
      {
        name: 'blue',
        num: 70,
        weight: 0
      },
      {
        name: 'green',
        num: 40,
        weight: 0
      },
      {
        name: 'purple',
        num: 20,
        weight: 0
      }
    ];

    var once = function (collection) {
      for (card in collection) {
        card.update({
          "tags": listifyTags(card)});
      }
    }
    // once($scope.cards);

    // var cloud = processTag.buildCloud($scope.cards);
    // console.log ('cloud: ', cloud)

}]);
