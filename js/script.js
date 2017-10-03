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


app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
   $scope.isFetching = false;
}]);


app.controller('trendingCtrl', ['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory) {
    const loadData = function() {
        $scope.isLoading = true;
        ApiFactory.getTrendingGifs()
            .then(function(response) {
                $scope.isLoading = false;
                $scope.trending = response.data.data;
                console.log($scope.trending);
            }, function(error) {
                console.log(error);
        });
    }
    loadData();
}]);


app.controller('searchCtrl', ['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory) {
    $scope.isLoading = false;
    $scope.getGiphies = function() {
        $scope.isLoading = true;
        ApiFactory.getSearchResults($scope.searchparam)
        .then(function(response) {
            $scope.results = response.data.data;
            $scope.isLoading = false
            console.log($scope.results)
        },
         function(error){ 
            $scope.error = error
         })
    }

    
}]);
//end of searchCtrl
