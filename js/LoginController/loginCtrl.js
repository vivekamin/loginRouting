teamNest.controller('loginCtrl', ['$scope','$location','$routeParams', function loginCtrl($scope,$location,$routeParams) {
    this.name = 'loginCtrl';
    this.params = $routeParams;
    //alert(this.name);
    $scope.wrongLogin = false;
    var loginSuccess = false;
    $scope.loginCheck = function (user,pass) {
      //alert(user + pass);
      if(user=="admin" && pass == "admin")
          loginSuccess = true;
      if(loginSuccess)
          {
            $location.path('dashboard');
            $scope.wrongLogin = false;
          }
      else
          $scope.wrongLogin = true;
    };
    
    
    
  }])