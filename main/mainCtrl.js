angular.module('cardApp')
  .controller('mainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'cards', function ($scope, $firebaseObject, $firebaseArray, cards) {
    
      $scope.cards = cards;

      
}]);
