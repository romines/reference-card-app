angular.module('cardApp')
  .service('processTags', function() {
    this.buildCloud = function(cards) {

      var tagsObj = {};

      angular.forEach(cards, function (card) {
        // loop through tags, ad each unique value to object, with number property
        // increment count if encountered again
        for (tag in card.tags) {
          var aTag = card.tags[tag]
          if (tagsObj[aTag]) {
            tagsObj[aTag] += 1
          } else {
            tagsObj[aTag] = 1
          }
        }

      })
      // turn object into array for to ng-repeat on
      var tagsArr = [];
      for (var prop in tagsObj) {

        var tmpObj = {
          name : prop,
          num  : tagsObj[prop],

        }
        tagsArr.push(tmpObj);
      }
      // sort to find highest number
      var sorted = tagsArr.slice().sort(sortNumber);
      // add 'proportion' porperty which is two digit decimal between 0 and 1
      // eg. tag appearing once (.20), tag appearing 5 times (max = 1)
      for (var i in sorted) {
        var proportion = (((sorted[i].num) / sorted[sorted.length - 1].num)/2 + .5).toFixed(2);
        sorted[i].proportion = proportion;
      }

      return shuffle(sorted);

    }
    function sortNumber(a,b) {
      return a.num - b.num;
    }
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

});
