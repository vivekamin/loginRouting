teamNest.controller('dashboardCtrl', ['$routeParams','$location','$scope', function dashboardCtrl($routeParams,$location,$scope) {
    this.name = 'dashboardCtrl';
    this.params = $routeParams;
    
    $scope.logout = function (){
        //alert("Logout");
        $location.path('login');
    }
  }])