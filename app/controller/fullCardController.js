angular.module("myApp")
    .controller("fullCardController", ["$http", "$scope", "$stateParams", "$httpParamSerializer",
        function ($http, $scope, $stateParams, $httpParamSerializer) {

            function init() {
                var statePar = $stateParams;
                getCard();
            };

            function getCard(postData) {

                var postData = { cid: "postData" };

                $http({
                    url: "https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/getCardByCid/",
                    method: "POST",
                    headers: {
                        'Content-Type': "application/x-www-form-urlencoded"
                    },
                    data: $httpParamSerializer(postData)
                }).then(function (resp) {

                }, function (error) {
                    var errorResp = error;
                });
            };
            $scope.getMeMyCards = function () {
                getCards();
            }
    

            init();
        }]);






