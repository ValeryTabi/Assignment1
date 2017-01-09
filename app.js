(function () {
  //use strict;

angular.module("LaunchApp",[])
.controller("myVMController", myVMController);

//myVMController.$inject = ['$scope'];
 function myVMController($scope) {
   $scope.launchVal = "Hello, Testing";
   $scope.launchstr = "Na weti sef norh";
   $scope.arrlen = 0;

   $scope.Calc = function () {

    //
    var arr = splitString($scope.launchstr,',');
    //$scope.launchVal = arr.length;
    $scope.launchVal = giveRes(arr);


   };

 }


 function splitString(stringToSplit, separator) {

   var arrayOfStrings = stringToSplit.split(separator);
   return arrayOfStrings;

 }


function giveRes(str){

  if (str.length > 3){
    return "Too Much";
  }
  else {
    return "Enjoy";
  }

}


})();
