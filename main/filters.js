angular.module('cardApp')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });