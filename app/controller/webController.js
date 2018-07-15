
angular.module("myApp")
    .controller("webController", ["$scope", function ($scope) {
        $scope.myName = "Vsihal Yadav";
        $scope.username = "nisha";
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });


    }
    ]);

