(function () {
  //use strict;

angular.module("LaunchApp",[])
.controller("myVMController", myVMController);

//myVMController.$inject = ['$scope'];
 function myVMController($scope) {
   $scope.launchVal = "";
   $scope.launchstr = "";
   $scope.arrlen = 0;

   $scope.Calc = function () {

    //
    var arr = splitString($scope.launchstr,',');
    //$scope.launchVal = arr.length;
    if ($scope.launchstr == ""){
        $scope.launchVal = "Please enter data first";
    }else{
    $scope.launchVal = giveRes(arr);
    }

   };

 }


 function splitString(stringToSplit, separator) {

   var arrayOfStrings = stringToSplit.split(separator);
   return arrayOfStrings;

 }


function giveRes(str){


  if (str.length > 3){
    return "Too much";
  }
  else  {
    return "Enjoy";
  }

}


})();
