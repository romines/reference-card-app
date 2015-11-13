angular.module('cardApp')
  .controller('editCardCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'editCardRef', function ($scope, $firebaseObject, $firebaseArray, editCardRef) {

    $scope.card = $firebaseObject(editCardRef);

    console.log($scope.editingCard);

}]);
