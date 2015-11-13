angular.module('cardApp')
  .directive('tag', function() {
  return {
    scope: {
      tag: '=',
    },
    restrict: 'E',
    template: '{{tag.name}}&nbsp;',
    link: function (scope, elem, attrs) {
      elem.css('font-size', fontSize(scope.tag.proportion));
    }
  }
})

function fontSize(frequency) {
  console.log(frequency.toString());
  return (frequency.toString() + 'em');
}
