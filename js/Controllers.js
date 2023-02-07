app.controller("appCtrl", function ($rootScope, $scope, $timeout, $interval) {

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
        "name": "Shawnee Lightbown",
        "title": "Registered Nurse",
        "img": "/img/team1.png"
    }, {
        "name": "Pavlov Casali",
        "title": "Developer I",
        "img": "/img/team2.png"
    }, {
        "name": "Pietra Gwinnell",
        "title": "Nurse",
        "img": "/img/team3.png"
    }, {
        "name": "Tynan Garrand",
        "title": "Clinical Specialist",
        "img": "/img/team4.png"
    }]
    $scope.categories = [
        {
            img: "/img/svg/web design.svg", title: "Web Design", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        { img: "/img/svg/multimedia.svg", title: "Video Editing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi." },
        {
            img: "/img/svg/laptop.svg", title: "Digital Marketing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            img: "/img/svg/reading-book.svg", title: "App Development", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            img: "/img/svg/to-do-list.svg", title: "Seo Marketing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            img: "/img/svg/lamp.svg", title: "Content Writing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        }
    ]
    
})
app.controller("coursesCtrl", function ($scope, $rootScope) {
    $(document).ready(function () {
        $("#form").hide(1)
        $("#reply").click(function (e) {
            e.preventDefault()
            $("#form").show(200)
        })
        // $("#form").submit(function (e) {
        //     e.preventDefault()
        //     let text1 =$("input:first").val()
        //     let text2 = $("input:last").val()
        //     $("li.faqs").append("<article class=\"container-fluid uk-comment\">\n" +
        //         "                <header class=\"uk-comment-header\">\n" +
        //         "                    <div class=\"uk-grid-medium uk-flex-middle\" uk-grid>\n" +
        //         "                        <div class=\"uk-width-auto\">\n" +
        //         "                            <img class=\"uk-comment-avatar\" src=\"img/about1.png\" width=\"80\" height=\"80\" alt=\"\">\n" +
        //         "                        </div>\n" +
        //         "                        <div class=\"uk-width-expand\">\n" +
        //         "                            <h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\">"+text1+"</a></h4>\n" +
        //         "                            <ul class=\"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\">\n" +
        //         "                                <li><a href=\"#\">12 days ago</a></li>\n" +
        //         "                                <li><a id=\"reply\">Reply</a></li>\n" +
        //         "                            </ul>\n" +
        //         "                        </div>\n" +
        //         "                    </div>\n" +
        //         "                </header>\n" +
        //         "                <div class=\"uk-comment-body\">\n" +
        //         "                    <p>"+text2+".</p>\n" +
        //         "                </div>\n" +
        //         "\n" +
        //         "            </article>")
        //
        //
        // })
        $scope.add = function (name, comment) {
            $scope.faqs.push(name, comment)
        }

    })
    $scope.web = [
        {
            name: "HTML", img: "img/html.png", duration: "7 Hours", diff: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Html Basics Tags" }] },
                { name: "lecture2", lessons: [{ name: "Attribute" }, { name: "Table" }, { name: "Table Attribute(colspan,rowspan)" }] }
            ]
        },
        {
            name: "CSS", img: "img/css-3.png", duration: "7 Hours", diff: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Style Attribute" }] },
                { name: "lecture2", lessons: [{ name: "colors" }, { name: "Fonts" }, { name: "Margin" }] }
            ]
        },
        {
            name: "JavaScript Basics", img: "img/javascript.png", duration: "7 Hours", diff: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Variables" }, { name: "Functions" }] },
                { name: "lecture2", lessons: [{ name: "Conditions(IF,While)" }, { name: "For Loops" }, { name: "Arrays" }] }
            ]
        },
        { name: "Jquery", img: "img/jquery.png", duration: "10 Hours", diff: "med" },
        { name: "Bootstrap", img: "img/bootstrap.jpg", duration: "10 Hours", diff: "med" },
        { name: "AngularJS", img: "img/angularjs.png", duration: "12 Hours", diff: "hard" },
        { name: "UI-Kit", img: "img/uikit.png", duration: "11 Hours", diff: "hard" },
        { name: "Advanced JavaScript", img: "img/advance.jpg", duration: "7 Hours", diff: "hard" }
    ]

    $scope.faqs = [
        { name: "Ahmed", comment: "Fun Experince" },


    ]

    $scope.showCourse = function (x) {

        $rootScope.course = x

        window.location.replace("http://127.0.0.1:8080/#!/main/course");
        console.log($rootScope.course)
    }
})