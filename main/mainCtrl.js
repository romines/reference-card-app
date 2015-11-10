angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'cards', function ($scope, $firebaseObject, $firebaseArray, cards) {
    // cards placed on scope by resolve
    $scope.cards = cards;

    $scope.save = function (card) {
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