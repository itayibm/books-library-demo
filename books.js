angular.module("demoApp").factory("books", function ($http, $q) {
    debugger
    var cacheMovies = [];
    return {
        getBooks: function (term) {
            var defer = $q.defer();
            if (cacheMovies.length > 0)
                defer.resolve(cacheMovies);
            else {
                var url = "http://localhost:64218/booksInfo.json" + term;
                $http({
                    "method": "get",
                    "url": url
                }).then(
                    function (results) {
                        defer.notify("notify 1");
                        var bookList = [];
                        angular.forEach(results.data.Search, function (item) {
                            this.push(new Movie(item.Title, item.Autuor, item.Img, item.Date))
                        }, bookList);
                        defer.notify("notify 2");
                        cacheMovies = bookList;
                        defer.resolve(cacheMovies);
                    },
                    function (err) {
                        defer.notify("notify 4");
                        defer.reject(err);
                    }
                    );
            }
            
            return defer.promise;
        }
    }
});