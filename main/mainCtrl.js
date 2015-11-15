angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseArray', '$state', 'cardsRef', 'processTags', function ($scope, $firebaseArray, $state, cardsRef, processTags) {
    
    $scope.appState = $state;

    var cards = $firebaseArray(cardsRef);
    $scope.cards = cards;

    cards.$loaded().then(function (cards) {

      $scope.cloud = processTags.buildCloud($scope.cards);
    });

    $scope.updateFilter = function(tagName) {
      $scope.cardFilter = tagName;
    }

}]);
