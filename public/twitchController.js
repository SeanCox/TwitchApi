  angular.module('TwitchApp',[])
      .controller( 'TwitchController',function($scope, $http){
        $http.get('/twitchapi').then(function(response){
          $scope.api = response.data
        })
        $scope.greeting = "hello world"

  })
