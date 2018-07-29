angular.module("myApp")
    .controller("fullCardController", ["$http", "$scope", "$stateParams", "$httpParamSerializer",
        function ($http, $scope, $stateParams, $httpParamSerializer) {

            function init() {
                var statePar = $stateParams;
                getCard();
            };


            function getCard() {

                var postData = { cid:  ""};

                $http({
                    url: "https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/fetchCompleteData/158/514258115/",
                    method: "POST",
                    headers: {
                        'Content-Type': undefined
                    },
                    data: $httpParamSerializer(postData)
                }).then(function (resp) {

                }, function (error) {
                    var errroResp = error;
                });
            };

            init();
        }]);






