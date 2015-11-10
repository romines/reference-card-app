angular.module('cardApp')
  .controller('mainCtrl', ['$scope', 'cardService', function ($scope, cardService) {
    // $scope.card = 'This is a sweet card';
    $scope.aboutText = 'Some stuff about the app';
    $scope.datas = cardService.getCards();

    $scope.cards = [];

    $scope.save = function(card) {
      var formDefaults = {
        title: '',
        content: '',
        tags: ''
      };


      // console.log('Save fired. Contents of card: ', card)
      var newCard = angular.copy(card);
      $scope.cards.push(newCard);
      $scope.card = formDefaults;
      $scope.cardForm.$setPristine();
    };
}]);
