app.controller("appCtrl", function ($rootScope, $scope) {
    $rootScope.categories = [
        {
            id: 1, img: "img/svg/web design.svg", title: "Web Design", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        { id: 2, img: "img/svg/multimedia.svg", title: "Video Editing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi." },
        {
            id: 3, img: "img/svg/laptop.svg", title: "Digital Marketing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            id: 4, img: "img/svg/reading-book.svg", title: "App Development", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            id: 5, img: "img/svg/to-do-list.svg", title: "Seo Marketing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
        {
            id: 6, img: "img/svg/lamp.svg", title: "Content Writing", caption: "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod temporincidi."
        },
    ]
    $rootScope.getRepeater = function (rate) {
        return new Array(rate);
    };
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


app.controller("coursesCtrl", function ($scope, $rootScope, $location) {
    window.scrollTo(0, 0)
    // Courses data Source
    $scope.allCourses = [
        {
            instructor: { name: "Doti Haig", img: "img/team1.png" }, enrollers: 7, price: 6.99, category_id: 1, name: "HTML", img: "img/courses/html.png", duration: "7 Hours", level: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Html Basics Tags" }] },
                { name: "lecture2", lessons: [{ name: "Attribute" }, { name: "Table" }, { name: "Table Attribute(colspan,rowspan)" }] }
            ]
        },
        {
            instructor: { name: "Mae Desseine", img: "img/team1.png" }, enrollers: 11, price: 5.99, category_id: 1, name: "CSS", img: "img/courses/css-3.png", duration: "7 Hours", level: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Style Attribute" }] },
                { name: "lecture2", lessons: [{ name: "colors" }, { name: "Fonts" }, { name: "Margin" }] }
            ]
        },
        {
            instructor: { name: "Hartwell Mungan", img: "img/team4.png" }, enrollers: 18, price: 6.50, category_id: 1, name: "JavaScript", img: "img/courses/javascript.png", duration: "7 Hours", level: "easy", lectures: [
                { name: "lecture1", lessons: [{ name: "Variables" }, { name: "Functions" }] },
                { name: "lecture2", lessons: [{ name: "Conditions(IF,While)" }, { name: "For Loops" }, { name: "Arrays" }] }
            ]
        },
        { instructor: { name: "Frasco Tour", img: "img/team2.png" }, enrollers: 27, price: 13, category_id: 1, name: "Jquery", img: "img/courses/jquery.png", duration: "10 Hours", level: "med" },
        { instructor: { name: "Heida Blaik", img: "img/team3.png" }, enrollers: 18, price: 11, category_id: 1, name: "Bootstrap", img: "img/courses/bootstrap.jpg", duration: "10 Hours", level: "med" },
        { instructor: { name: "Damara Rapinett", img: "img/team4.png" }, enrollers: 15, price: 4.99, category_id: 1, name: "AngularJS", img: "img/courses/angularjs.png", duration: "12 Hours", level: "hard" },
        { instructor: { name: "Dixon Jones", img: "img/team2.png" }, enrollers: 18, price: 7, category_id: 6, name: "Entity SEO for Content Writers", img: "img/courses/seo.webp", duration: "2 Hours", level: "med" },
        { instructor: { name: "Melisandra Yerson", img: "img/team2.png" }, enrollers: 18, price: 8, category_id: 2, name: "Introduction to Video Editing", img: "img/courses/vid-edit1.jfif", duration: "3 Hours", level: "easy" },
        { instructor: { name: "Melisandra Yerson", img: "img/team2.png" }, enrollers: 18, price: 10, category_id: 1, name: "UI-Kit", img: "img/courses/uikit.png", duration: "11 Hours", level: "hard" },
        { instructor: { name: "Dixon Jones", img: "img/team2.png" }, enrollers: 18, price: 7, category_id: 3, name: "Fundamentals of digital marketing", img: "img/courses/d-markiting.png", duration: "2 Hours", level: "easy" },
        { instructor: { name: "Trula Haliburton", img: "img/team1.png" }, enrollers: 27, price: 18, category_id: 1, name: "Vue", img: "img/courses/vue.svg", duration: "7 Hours", level: "hard" },

        { instructor: { name: "Melisandra Yerson", img: "img/team2.png" }, enrollers: 18, price: 7, category_id: 2, name: "Create website videos with Canva", img: "img/courses/video-edit.png", duration: "2 Hours", level: "med" },

        { instructor: { name: "Dixon Jones", img: "img/team2.png" }, enrollers: 18, price: 7, category_id: 6, name: "Content Writing Masterclass+", img: "img/courses/content+.webp", duration: "5 Hours", level: "med" },
        { instructor: { name: "Dixon Jones", img: "img/team2.png" }, enrollers: 18, price: 7, category_id: 5, name: "SEO", img: "img/courses/seo.png", duration: "5 Hours", level: "med" },

    ]
    if (localStorage["selectedCourse"]) {
        $rootScope.course = JSON.parse(localStorage["selectedCourse"])
    }
    else {
        $location.path("/main/courses");
    }
    $scope.view = 'list'

    $scope.currentPage = 1
    $scope.$watch("currentPage", function (nextPage) {
        $scope.getCourses({ page: nextPage, filteredCourses: $scope.filteredCourses })
        window.scrollTo(0, 0)
    })
    // Courses to be Shown
    $scope.courses = []
    $scope.limit = 6
    // To check if user has used sidebar filter
    $scope.filter = false
    $scope.filteredCourses = []

    $scope.getCourses = async function ({ page = $scope.currentPage, limit = $scope.limit, filteredCourses } = {}) {
        if ($scope.filter) {
            return $scope.courses = filteredCourses.slice((page - 1) * limit, page * limit)
        }
        $scope.pages = Math.ceil($scope.allCourses.length / $scope.limit)
        $scope.courses = $scope.allCourses.slice((page - 1) * limit, page * limit)
    }
    $scope.getCourses()

    $scope.search = function () {
        if (!$scope.keyword && !$scope.levelFilter && !$scope.categoryFilter) return
        function filterCourses(course) {
            // Filter Functions
            filter = {
                byKeyword: course => course.name.toLowerCase().indexOf($scope.keyword?.toLowerCase()) >= 0,
                byLevel: course => course.level == $scope.levelFilter,
                byCategory: course => course.category_id == $scope.categoryFilter
            }
            // Selected Filter By user
            selected = []
            if ($scope.keyword) {
                selected.push(filter.byKeyword)
            }
            if ($scope.levelFilter) {
                selected.push(filter.byLevel)
            }
            if ($scope.categoryFilter) {
                selected.push(filter.byCategory)
            }
            return selected.every(f => f(course))
        }
        $scope.filter = true
        $scope.filteredCourses = $scope.allCourses.filter(filterCourses)
        $scope.pages = Math.ceil($scope.filteredCourses.length / $scope.limit)
        $scope.getCourses({ filter: true, filteredCourses: $scope.filteredCourses })
    }
    // Filter Courses
    $scope.resetFilters = function () {
        $scope.categoryFilter = ""
        $scope.levelFilter = ""
        $scope.keyword = ""
        $scope.filter = false
        $scope.filteredCourses = []
        $scope.currentPage = 1
        $scope.getCourses()
    }

    $scope.pagination = function () {
        let allItems =  $scope.filter ?$scope.filteredCourses.length: $scope.allCourses.length
        let firstItem = (($scope.currentPage - 1) * $scope.limit) + 1
        let lastItem = $scope.currentPage * $scope.courses.length
        if($scope.currentPage == $scope.pages) lastItem = allItems
        return{firstItem,lastItem,allItems}
    }
    $scope.changePage = function (num) {
        $scope.currentPage = num
    }

    $scope.getCategoryName = function (id) {
        const category = $rootScope.categories.find(category => category.id == id)
        return category.title
    }

    $scope.faqs = [
        { name: "Ahmed", comment: "Fun Experince" },
    ]

    $scope.viewCourse = function (course) {

        $rootScope.course = course
        localStorage["selectedCourse"] = JSON.stringify(course)
        $location.path("/main/course");
    }
})