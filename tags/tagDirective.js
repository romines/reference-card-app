angular.module('cardApp')
  .directive('tag', function() {
  return {
    scope: {
      tag: '=',
    },
    restrict: 'E',
    template: '<span>{{tag.name}}</span>',
    link: function (scope, elem, attrs) {
      elem.css('font-size', fontSize(scope.tag.num));
    }
  }
})

function fontSize(frequency) {
  return ('1.' + frequency.toString() + 'em');
}