// ANGULAR APP.JS


// let path = 'https://reqres.in/api/users?page=2'

angular.module('myApp', [])
    .controller('myController', function($scope, $http) {
        $scope.users = []; // Initialize an empty array to store users
        $scope.error = null; // Initialize error to null
      
        $scope.fetchData = function() {
            $http.get(path)
                .then(function(response) {
                    // Success callback
                    $scope.users = response.data.data; // Extract the user array
                    $scope.error = null; // Reset error on success
                })
                .catch(function(error) {
                    // Error callback
                    console.error('Error fetching data:', error);
                    $scope.error = error.statusText || "An error occurred";
                
                
                });
        };
    });



