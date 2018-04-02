app.controller('photosCtrl', function($scope, $http, $location,$rootScope) {
   $scope.albumnId= $rootScope.albumnId;
    $http.get("https://jsonplaceholder.typicode.com/photos")
    .then(function (response){
     
        $scope.photoData = [];
      for(var index in response.data){
            if(response.data[index].albumId ==  $scope.albumnId )
                $scope.photoData.push(response.data[index])
        }
        
               
    });
    
  
    
});