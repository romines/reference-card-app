angular.module('cardApp')
  .directive('tag', function() {
  return {
    scope: {
      tag: '=',
      filter: '='
    },
    restrict: 'E',
    template: '<span>{{tag.name}}</span>',
    link: function (scope, elem, attrs) {
      elem.css('font-size', fontSize(scope.tag.num));
      elem.bind('click', function() {
        console.log(scope.tag.name);
        scope.filter = scope.tag.name;
      });
    }
  }
})

function fontSize(frequency) {
  return ('1.' + frequency.toString() + 'em');
}