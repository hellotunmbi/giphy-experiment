var app = angular.module('giphyExp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
        .when("/trending", {
            templateUrl: 'views/trending.html',
            controller: 'trendingCtrl'
        })

        .when("/search", {
            templateUrl: 'views/search.html',
            controller: 'searchCtrl'
        })

        .otherwise({
            templateUrl: 'views/home.html'
        })
});


app.controller('trendingCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('http://api.giphy.com/v1/gifs/trending?api_key=3a5d40cc20b943719f53a35ec3b2abff')
        .then(function(response) {
            $scope.trending = response.data.data;

            console.log($scope.trending);
        }, function(error) {
        //    console.log(error);
        })
}]);


app.controller('searchCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.getGiphies = function() {
        console.log("someone clicked me");

        $scope.message = "hi there";

    }

    

    // $http.get('http://api.giphy.com/v1/gifs/search?api_key=3a5d40cc20b943719f53a35ec3b2abff' + '& q=cheese')
    //     .then(function(response) {
    //         $scope.result = response.result;
    //     },
    //      function(error){ 

    //      })
}]);
//end of searchCtrl
