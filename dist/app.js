var _a, _b, _c, _d;
var Professions = (_a = document.getElementById("Professions")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { alert(allProfessions); });
var teachers = (_b = document.getElementById("Teachers")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    return alert("List of Teachers:\n" + allTeachers.map(function (teacher) { return teacher.teachername + " - " + teacher.Professions; }).join("\n"));
});
var btnsearch = (_c = document.getElementById("search")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", search);
var btnaddnew = (_d = document.getElementById("addnew")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", addnew);
var allProfessions = [
    "math",
    "language",
    "history",
    "Geography",
];
var allTeachers = [
    {
        teachername: "gilad",
        Professions: "math"
    },
    {
        teachername: "noam",
        Professions: "Geography"
    },
    {
        teachername: "eden",
        Professions: "history"
    },
    {
        teachername: "omry",
        Professions: "language"
    }
];
var students = [
    {
        studentname: "bob",
        "class": "th8"
    },
    {
        studentname: "jhon",
        "class": "th2"
    },
    {
        studentname: "jasica",
        "class": "th6"
    },
    {
        studentname: "mike",
        "class": "th7"
    },
    {
        studentname: "adel",
        "class": "th8"
    },
    {
        studentname: "oded",
        "class": "th1"
    },
    {
        studentname: "harel",
        "class": "th3"
    },
    {
        studentname: "",
        "class": ""
    },
];
function search() {
    var input = document.querySelector("input");
    if (!input) {
        return;
    }
    var inputValue = input.value.trim().toLocaleLowerCase();
    var studentFound = students.find(function (student) { return student.studentname.toLowerCase() === inputValue; });
    if (studentFound) {
        alert(inputValue + " is a students. Class: " + studentFound["class"]);
        return;
    }
    else {
        alert(inputValue + " is not a students.");
    }
}
function addnew() {
    var studentname = document.getElementById("studentname");
    var studentclass = document.getElementById("studentcalss");
    if (!studentclass || !studentclass) {
        return;
    }
    var newStudent = {
        studentname: studentName.value,
        "class": studentClass.value
    };
    students.push(newStudent);
    console.log(students);
}
