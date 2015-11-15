angular.module('cardApp')
  .service('processTags', function() {
    this.buildCloud = function(cards) {
      var tagsObj = {};


      cards.forEach(function (card) {
        // loop through tags, ad each unique value to object, with a number
        // property initialized at 1. Increment number if encountered again
        //

        for (tag in card.tags) {
          var aTag = card.tags[tag]
          if (tagsObj[aTag]) {
            tagsObj[aTag] += 1
          } else {
            tagsObj[aTag] = 1
          }
        }

      })
      
      // turn object into array to ng-repeat on
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
      //
      // add 'proportion' porperty (two digit decimal fraction) which represents
      // the ratio of this tags 'number' to the most popular tag's number.
      // eg. if the post popular tag appears 5 times, a tag appearing once gets .20
      //
      for (var i in sorted) {
        var proportion = (((sorted[i].num) / sorted[sorted.length - 1].num)/2 + .5).toFixed(2);
        sorted[i].proportion = proportion;
      }

      return shuffle(sorted);

    }
    //
    // ################# HELPERS ###################
    //
    //numerical sort
    function sortNumber(a,b) {
      return a.num - b.num;
    }

    // Fisher-Yates shuffle via http://stackoverflow.com/a/2450976/1795119
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
