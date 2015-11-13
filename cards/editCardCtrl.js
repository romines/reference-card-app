angular.module('cardApp')
  .controller('editCardCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'editCardRef', function ($scope, $firebaseObject, $firebaseArray, editCardRef) {

    $scope.editingCard = $firebaseObject(editCardRef);

    console.log($scope.editingCard);

}]);
