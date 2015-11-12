angular.module('cardApp')
  .service('processTag', function() {
    this.buildCloud = function(collection) {
      var tags = {};

      for (card in collection) {
        if (tags[card.name]) {
          tags[card.name] += 1
        } else {
          tags[card.name] = 1
        }
      }
      return tags;
    }
});
