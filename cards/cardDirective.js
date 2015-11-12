angular.module('cardApp')
  .directive('card', function() {
    return {
      scope: {
        card: '='
      },
      restrict: 'E',
      template: '{{card.content}}',
      link: function (scope, elem, attrs) {
        
        elem.text(scope.card.content);
        
        if(scope.card.code) {
          elem.html('<pre class="pretty">' + prettyPrintOne(elem.text()) + '</pre>');  
        } else {
          elem.html('<pre>' + elem.text() + '</pre>');
        }
        
      }
    };
  });
