app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
    
        .when("/users", {
        templateUrl: "users.html" 
    })
        .when("/album", {
        templateUrl: "/album.html" 
    })

        .when("/photos", {
        templateUrl: "photos.html" 
    })
    .otherwise({redirectTo:'/users'})
    
     

});