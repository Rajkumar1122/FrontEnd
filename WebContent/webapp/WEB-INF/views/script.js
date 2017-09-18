2
// Code goes here

var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {templateUrl: 'Home.html'});
        $routeProvider.when('/Login', {templateUrl: 'Login.html', controller: 'loginCtrl'});
        $routeProvider.when('/Register', {templateUrl: 'Register.html', controller: 'registerCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
/*
app.factory("data", function($http){
  
  var emp = {"text" : null};
  
  return{
    getText : function(){
      var promise = $http.get("http://www.w3schools.com/angular/customers.php");
      
      promise.success(function(response) {
        emp.text = response.records;
      });
      
      promise.error(function(error) {
        emp.text = error;
      });
      return emp;
    }
  };
});

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});

app.controller("loginCtrl", function($scope,data){
  console.log("controller called");
  $scope.msg = data.getText();
  $scope.filtered = $scope.msg.text;
  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;

  $scope.range = function() {
    var ret = [];
   
    for (var i=0; i<$scope.pageCount(); i++) {
      ret.push(i);
    }
    
    if(ret.length === 0){
      $scope.nextPageDisabled();
      console.log($scope.currentPage);
      $scope.prevPageDisabled();
    }
    
    return ret;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.filtered.length/$scope.itemsPerPage);
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.nextPageDisabled = function() {
    if($scope.currentPage === 0 )
      return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    else
      return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    if(n >= 0 && n < $scope.pageCount())
        $scope.currentPage = n;
  };
  
  $scope.$watch("search", function(newVal, oldVal){
    $scope.currentPage = 0;
  });
});

function changeRows(val){
  val = parseInt(val);
  angular.element(document.getElementById("body")).scope().itemsPerPage = val;
}


app.controller("registerCtrl", function($scope){
 $scope.friends = [
        {
        name: 'John',
        phone: '555-1276'},
    {
        name: 'Mary',
        phone: '800-BIG-MARY'},
    {
        name: 'Mike',
        phone: '555-4321'},
    {
        name: 'Adam',
        phone: '555-5678'},
    {
        name: 'Julie',
        phone: '555-8765'}
    ];
})*/