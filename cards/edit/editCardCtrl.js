angular.module('cardApp')
  .controller('editCardCtrl', ['$scope', '$state', '$firebaseObject', '$firebaseArray', 'editCardRef', function ($scope, $state, $firebaseObject, $firebaseArray, editCardRef) {

    $scope.card = $firebaseObject(editCardRef);

    $scope.saveEdits = function(){
      $scope.card.$save();
      $state.go('cards');
    }

}]);
