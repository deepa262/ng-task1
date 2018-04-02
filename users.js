
app.controller('customersCtrl', function($scope, $http, $location,$rootScope) {
   $scope.album = function(userId){
       $location.path('/album')
       $rootScope.userId = userId;
   }
    $http.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response){
        $scope.names = response.data;
    
    });
    
});