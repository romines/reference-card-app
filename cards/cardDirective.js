angular.module('cardApp')
  .directive('card', function() {
    return {
      scope: {
        card: '='
      },
      restrict: 'E',
      templateUrl: 'cards/card.html',
      link: function (scope, elem, attrs) {
        elem.text(scope.card.content).html('<pre>' + prettyPrintOne(elem.text()) + '</pre>');
      }
    };
  });
