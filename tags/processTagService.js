angular.module('cardApp')
  .service('processTags', function() {
    this.buildCloud = function(cards) {

      var tagsObj = {};

      angular.forEach(cards, function (card) {

        for (tag in card.tags) {
          var aTag = card.tags[tag]
          if (tagsObj[aTag]) {
            tagsObj[aTag] += 1
          } else {
            tagsObj[aTag] = 1
          }
        }

      })

      var tagsArr = [];
      for (var prop in tagsObj) {

        var tmpObj = {
          name : prop,
          num  : tagsObj[prop],

        }
        tagsArr.push(tmpObj);
      }
      var sorted = tagsArr.slice().sort(sortNumber);
      // console.log(tagsArr);
      console.log(sorted[sorted.length - 1].num);
      for (var i in sorted) {
        var proportion = (sorted[i].num / sorted[sorted.length - 1].num).toFixed(2);
        sorted[i].proportion = proportion;
      }

      console.log(sorted);

      return tagsArr;
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
