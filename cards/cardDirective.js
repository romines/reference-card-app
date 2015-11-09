angular.module('cardApp')
  .directive('card', function() {
    return {
      restrict: 'E',
      templateUrl: 'cards/card.html'
      // link: function (scope, element, attrs) {
      //   element.html(prettyPrintOne(element.html(), '', true));
      // }
    };
  });
