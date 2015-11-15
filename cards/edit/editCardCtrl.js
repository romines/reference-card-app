angular.module('cardApp')
  .controller('editCardCtrl', ['$scope', '$state', '$firebaseObject', '$firebaseArray', 'editCardRef', function ($scope, $state, $firebaseObject, $firebaseArray, editCardRef) {

    $scope.card = $firebaseObject(editCardRef);

    $scope.saveEdits = function(){
      // console.log($scope.card.parent());
      $scope.card.tags = listifyTags($scope.card.tags);

      $scope.card.$save();
      $state.go('cards');
    };

    $scope.delete = function () {
      $scope.card.$remove();
      $state.go('cards');
    }

    function listifyTags(str) {
      return str.split(/[ ,]+/);
    }

}]);
