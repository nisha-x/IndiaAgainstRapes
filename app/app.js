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
});