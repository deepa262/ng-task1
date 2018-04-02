app.controller('albumCtrl', function($scope, $http, $location,$rootScope) {
    
    
 $scope.photos = function(userId){
       $location.path('/photos')
       $rootScope.albumnId = userId;
     console.log("$rootScope.albumnId")
      
   }
 
$scope.userId = $rootScope.userId;
  
 $http.get("https://jsonplaceholder.typicode.com/albums")
    .then(function (response){
     
        $scope.albumData = [];
      for(var index in response.data){
            if(response.data[index].userId ==  $scope.userId )
                $scope.albumData.push(response.data[index])
        }
        $scope.names = response.data;
        
    });
});