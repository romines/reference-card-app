angular.module('cardApp')
  .controller('mainCtrl', ['$scope', 'cardService', function ($scope, cardService) {
    $scope.card = 'This is a sweet card';
    $scope.aboutText = 'Some stuff about the app';
    $scope.datas = cardService.getCards();
}]);
