angular.module('userProfiles').service('mainService', function($http, $q) { // 1
  this.getUsers = function(pageNum) {
    var deferred = $q.defer(); // 2
    $http({
			method: 'GET',
			url: 'http://reqres.in/api/users?page=' + pageNum
		}).then(function(response) {              // 3
      var parsedResponse = response.data.data;    // 4
      deferred.resolve(parsedResponse);
    });
    return deferred.promise;
  };



});


// 1. Add the ''$q' to the first line inside the function
// 2. Add a deferred variable to handle it (line 3)
// 3. Add a promise to the service, and remove the 'return' from line 4
// 4. Use the $q to filter the data
