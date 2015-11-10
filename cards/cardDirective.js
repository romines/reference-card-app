angular.module('cardApp')
  .directive('card', function() {
    return {
      scope: {
        card: '='
      },
      restrict: 'E',
      templateUrl: 'cards/card.html',
      link: function (scope, elem, attrs) {
        
        elem.text(scope.card.content);
        
        if(scope.card.code) {
          elem.html('<pre>' + prettyPrintOne(elem.text()) + '</pre>');  
        } 
        
      }
    };
  });
