


angular.module("demoApp").controller("startPageCtrl", function (books) {
    debugger;   
    console.log("sda")
    var _this = this;
    _this.trim = ""
    _this.bookList = [];
    _this.msg = "I am demo 2";
    debugger
    (function () {
        debugger
        _this.getBooks = function () {
            books.getBooks(_this.trim).then(
                function (bookList) {
                    _this.bookList = bookList;
                },
                function (err) {
                    throw err;
                },
                function (notify) {
                    console.log(notify);
                });
        }

    })
    //$scope.students = [
    //    { "id": 101, "name": "alef", "grade": 88 },
    //    { "id": 102, "name": "bet", "grade": 90 },
    //    { "id": 103, "name": "gimel", "grade": 95 },
    //    { "id": 104, "name": "jimi", "grade": 50 },
    //    { "id": 105, "name": "dany", "grade": 80 }
    //];
   
    //var addStudent = function (newStudent) {
    // $scope.students.push(newStudent)
    //}

    //$scope.addStudent = function () {
    //    var newStudent = {};
    //    angular.copy($scope.newStudent, newStudent);
    //    addStudent(newStudent);
    //}

    //_this.newStudent = {
    //    "id": 1,
    //    "name": "unknown",
    //    "grade": 1
    //};

    //$scope.students = [
    //    new Student(101, "Alef", 90),
    //    new Student(102, "Bet", 92),
    //    new Student(103, "Gimel", 96),
    //    new Student(104, "shimi", 91)
    //]

    //_this.addStudent = function () {
    //    _this.students.push(
    //        new Student(
    //            _this.newStudent.id,
    //            _this.newStudent.name,
    //            _this.newStudent.grade)
    //    );
    //}
   
    //$scope.removeStudent = function (student) {
    //    debugger
    //    $scope.students.splice($scope.students.indexOf(student), 1);
    //}

    
});