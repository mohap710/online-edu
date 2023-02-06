var app=angular.module("myApp",["ui.router","ngAnimate",'mds'])
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider

        .state("main",{
            url:"/main",
            views:{
                main:{
                    templateUrl:"templates/main.html"
                }
            }

        })

        .state("main.home",{
            url:"/home",
            views:{
                sub:{
                    templateUrl:"templates/home.html",
                    controller:"HomeCtrl"

                }

            }
        })

        .state("main.courses",{
            url:"/courses",
            views:{
                sub:{
                    templateUrl:"templates/courses.html",
                    controller:"coursesCtrl"
                }
            }
        })
        .state("main.course",{
            url:"/course",
            views:{
                sub:{
                    templateUrl:"templates/course.html",
                    controller:"coursesCtrl"
                }
            }
        })

        .state("main.contact",{
            url:"/contact",
            views:{
                sub:{templateUrl:"templates/contact.html"}
            }
        })



    $urlRouterProvider.otherwise("/main/home")
//


})
