var app = angular.module('giphyExp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
        .when("/trending", {
            templateUrl: 'views/trending.html',
            controller: 'trendingCtrl'
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


