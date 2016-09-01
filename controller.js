angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.pageNum = 1;

  // $scope.getUsers = function() {
  //   mainService.getUsers($scope.pageNum).then(function(response) {
  //     $scope.users = response.data.data;
  //     $scope.total_pages = response.data.total_pages;
  //   });
  // };
  // angular.module('userProfiles').controller('MainController', function($scope, mainService) {
    $scope.getUsers = function() {
      mainService.getUsers().then(function(dataFromService) {
        $scope.users = dataFromService;
      });
    };

  $scope.getUsers();

  // $scope.previous = function() {
  //   if($scope.pageNum > 1) {
  //     $scope.pageNum--;
  //     $scope.getUsers();
  // }
  // };
  // $scope.next = function() {
  //   if ($scope.total_pages > $scope.pageNum) {
  //     $scope.pageNum++;
  //     $scope.getUsers();
  //   }
  // };

});
