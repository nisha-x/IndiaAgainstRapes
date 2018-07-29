
angular.module("myApp")
    .controller("webController", ["$scope", function ($scope) {
        // $scope.myName = "Vsihal Yadav";
        // $scope.username = "nisha";
        $(document).ready(function () {
            $('.sidenav').sidenav({
                closeOnClick: true,
                draggable: true,
            });
        });


    }
    ]);





    // var addParams = function(key, val, url) {
    //     var arr = url.split('?');
    //     if(arr.length == 1) {
    //       return url + '?' + key + '=' + val;
    //     }
    //     else if(arr.length == 2) {
    //       var params = arr[1].split('&');
    //       var p = {};
    //       var a = [];
    //       var strarr = [];
    //       $.each(params, function(index, element) {
    //         a = element.split('=');
    //         p[a[0]] = a[1];
    //         })
    //       p[key] = val;
    //       for(var o in p) {
    //         strarr.push(o + '=' + p[o]);
    //       }
    //       var str = strarr.join('&');
    //       return(arr[0] + '?' + str);
    //     }
    //   }