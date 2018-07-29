var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/web');

    $stateProvider
        .state("web", {
            url: "/web",
            templateUrl: "../views/web.html",
            controller: "webController as ctrl"
        })

        .state("web.home", {
            url: "/home",
            views: {
                '@web': {
                    templateUrl: "../views/home.html",
                    controller: "homeController as ctrl"
                }
            }

        })
        .state("web.stories", {
            url: "/stories",
            views: {
                '@web': {
                    templateUrl: "../views/stories.html",
                    controller: "storiesController as ctrl"
                }
            }
        })

        .state("web.stories.fullstories", {
            url: "/:storiesId",
            views: {
                '@web': {
                    templateUrl: "../views/fullstories.html",
                    controller: "fullStoriesController as ctrl"
                }
            }
        })

        .state("web.about", {
            url: "/about",
            views: {
                '@web': {
                    templateUrl: "../views/about.html",
                    controller: "aboutController as ctrl"
                }
            }
        })
        .state("web.contactus", {
            url: "/contactus",
            views: {
                '@web': {
                    templateUrl: "../views/contactus.html",
                    controller: "contactusController as ctrl"
                }
            }
        })
        .state("web.cards", {
            url: "/cards",
            views: {
                '@web': {
                    templateUrl: "../views/cards.html",
                    controller: "cardsController as ctrl"
                }
            }
        })
        .state("web.cards.fullCard", {
            url: "/:cardsCid",
            views: {
                '@web': {
                    templateUrl: "../views/full-card.html",
                    controller: "fullCardController as ctrl"
                }
            }
        })

});