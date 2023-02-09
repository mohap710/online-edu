app.controller("appCtrl", function ($rootScope, $scope, $timeout, $interval) {
    $rootScope.categories = [
        {
            img: "img/svg/web design.svg", title: "Web Design", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        { img: "img/svg/multimedia.svg", title: "Video Editing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi." },
        {
            img: "img/svg/laptop.svg", title: "Digital Marketing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            img: "img/svg/reading-book.svg", title: "App Development", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            img: "img/svg/to-do-list.svg", title: "Seo Marketing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            img: "img/svg/lamp.svg", title: "Content Writing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        }
    ]
    $scope.year = new Date().getFullYear()
})
app.controller("HomeCtrl", function ($scope) {
    window.scrollTo(0, 0)
    $scope.stats = {
        courses: 19,
        quizzes: 11,
        instructors: 9,
        learners: 250
    }
    $scope.getRepeater = function (rate) {
        return new Array(rate);
    };
    $scope.reviews = [
        { img: "img/team2.png", name: "Saunderson Grist", date: "02-April-2020", rate: 5, comment: "Very easy to use. I am so pleased with this product." },
        { img: "img/team4.png", name: "Travis Tregale", date: "27-April-2020", rate: 2, comment: "I would also like to say thank you to all your staff. Online-edu impressed me on multiple levels. The service was excellent." },
        { img: "img/team1.png", name: "Penelopa Pollitt", date: "02-May-2020", rate: 4, comment: "Without Online-edu, we would have gone bankrupt by now. I would also like to say thank you to all your staff. I made back the purchase price in just 48 hours!" },
        { img: "img/team2.png", name: "Martina Dutnall", date: "02-march-2021", rate: 3, comment: "It's exactly what I've been looking for. Definitely worth the investment." },
        { img: "img/team3.png", name: "Shanon Slevin", date: "02-April-2020", rate: 2, comment: "I have gotten at least 50 times the value from Online-edu. Thanks to Online-edu, we've just launched our 5th website!" },
    ]

    $scope.team = [{
        name: "Shawnee Lightbown",
        title: "Registered Nurse",
        img: "img/team1.png"
    }, {
        name: "Pavlov Casali",
        title: "Developer I",
        img: "img/team2.png"
    }, {
        name: "Pietra Gwinnell",
        title: "Nurse",
        img: "img/team3.png"
    }, {
        name: "Tynan Garrand",
        title: "Clinical Specialist",
        img: "img/team4.png"
    }]

    
})


app.controller("coursesCtrl", function ($scope, $rootScope,$location) {
    window.scrollTo(0, 0)
    $(document).ready(function () {
        $("#form").hide(1)
        $("#reply").click(function (e) {
            e.preventDefault()
            $("#form").show(200)
        })

        $scope.add = function (name, comment) {
            $scope.faqs.push(name, comment)
        }

    })
    $scope.courses = [
        {
            instructor:{name:"Doti Haig",img:"img/team1.png"},price:500,category:"web",name: "HTML", img: "img/courses/html.png", duration: "7 Hours", level: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Html Basics Tags" }] },
                { name: "lecture2", lessons: [{ name: "Attribute" }, { name: "Table" }, { name: "Table Attribute(colspan,rowspan)" }] }
            ]
        },
        {
            instructor:{name:"Mae Desseine",img:"img/team1.png"},price:500,category:"web",name: "CSS", img: "img/courses/css-3.png", duration: "7 Hours", level: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Style Attribute" }] },
                { name: "lecture2", lessons: [{ name: "colors" }, { name: "Fonts" }, { name: "Margin" }] }
            ]
        },
        {
            instructor:{name:"Hartwell Mungan",img:"img/team4.png"},price:500,category:"web",name: "JavaScript Basics", img: "img/courses/javascript.png", duration: "7 Hours", level: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Variables" }, { name: "Functions" }] },
                { name: "lecture2", lessons: [{ name: "Conditions(IF,While)" }, { name: "For Loops" }, { name: "Arrays" }] }
            ]
        },
        { instructor:{name:"Frasco Tour",img:"img/team2.png"},price:500,category:"web",name: "Jquery", img: "img/courses/jquery.png", duration: "10 Hours", level: "med" },
        { instructor:{name:"Heida Blaik",img:"img/team3.png"},price:500,category:"web",name: "Bootstrap", img: "img/courses/bootstrap.jpg", duration: "10 Hours", level: "med" },
        { instructor:{name:"Damara Rapinett",img:"img/team4.png"},price:500,category:"web",name: "AngularJS", img: "img/courses/angularjs.png", duration: "12 Hours", level: "hard" },
        { instructor:{name:"Melisandra Yerson",img:"img/team2.png"},price:500,category:"web",name: "UI-Kit", img: "img/courses/uikit.png", duration: "11 Hours", level: "hard" },
        { instructor:{name:"Trula Haliburton",img:"img/team1.png"},price:500,category:"web",name: "Advanced JavaScript", img: "img/courses/advance.jpg", duration: "7 Hours", level: "hard" }
    ]

    $scope.faqs = [
        { name: "Ahmed", comment: "Fun Experince" },


    ]

    $scope.viewCourse = function (course) {

        $rootScope.course = course

        $location.path("/main/course");
        console.log($rootScope.course)
    }
})