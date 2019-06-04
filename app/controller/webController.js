
angular.module("myApp")
    .controller("webController", ["$scope", function ($scope) {
        var self = this;
        $scope.topStories = [
            {
                id: 1,
                title: "Justice",
                descr: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
                imageUrl: "../app/images/story1.jpg"
            },
            {
                id: 2,
                title: "Justice",
                descr: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
                imageUrl: "../app/images/story1.jpg"
            },
            {
                id: 3,
                title: "Justice",
                descr: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
                imageUrl: "../app/images/story1.jpg"
            }
        ]
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