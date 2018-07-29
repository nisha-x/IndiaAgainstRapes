angular.module("myApp")
    .controller("cardsController", ["$http", "$scope", function ($http, $scope, $stateParams) {

        function init() {

            getCards();
        };

        function getCards() {
            $http({
                url: "https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/fetchCompleteData/158/514258115/",
                method: "GET"
            }).then(function (resp) {
                var nisha = resp;
                $scope.meCards = resp.data.data.carddata;
                $scope.myContactCards = resp.data.data.walletdata;
            }, function (error) {
                var errroResp = error;
            });
        };

        $scope.getMeMyCards = function () {
            getCards();
        };


        init();

    }]);