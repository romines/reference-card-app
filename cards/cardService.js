angular.module('cardApp')
  .service('cardService', function() {
    var data = [
      {
        "text" : "var myApp = angular.module('myApp',[]);\n\
\n\
myApp.controller('GreetingController', ['$scope', function($scope) {\n\
  $scope.greeting = 'Hola!';\n\
}]);"
      },
      {
        "text" : "this is some more text that will be a card/code snippet"
      },
      {
        "text" : "this is some text that will be a card/code snippet"
      }

    ];

    this.getCards = function() {
      return data;
    };

  });
