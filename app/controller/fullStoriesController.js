angular.module("myApp")
    .controller("fullStoriesController", ["$scope", "$stateParams", function ($scope, $stateParams) {
        var self = $stateParams;
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

        $scope.currentStories = [];

        function init() {
            // $scope.topStories.forEach(function(items){
            //     currentStories.push(item)
            //     if (items.id == $stateParams.itemsId){
            //         return true;
            //     }
            //     else {
            //         return false;
            //     }

            // })
            $scope.currentstories = $scope.topStories.filter(function (item) {
                if (item.id == $stateParams.storiesId) {
                    return true;
                }
                else {
                    return false;
                }
            });


        }
        init();
    }]);