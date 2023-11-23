var _a, _b;
console.log("conect");
var Professions = (_a = document.getElementById("Professions")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { alert(allProfessions); });
var btnsearch = (_b = document.getElementById("search")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", search);
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
