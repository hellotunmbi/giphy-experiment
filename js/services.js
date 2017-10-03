app.factory('ApiFactory', ['$http', function($http) {
    const getTrendingGifs = function() {
        /*
        * can handle Other things in this function, like postbody params processing etc etc
        */
        return $http.get('https://api.giphy.com/v1/gifs/trending?api_key=3a5d40cc20b943719f53a35ec3b2abff')
    }

    const getSearchResults = function(searchString) {
        return $http.get('https://api.giphy.com/v1/gifs/search?api_key=3a5d40cc20b943719f53a35ec3b2abff&q='+searchString)
    }

	return {
        getTrendingGifs: getTrendingGifs,
        getSearchResults: getSearchResults
    }
}])