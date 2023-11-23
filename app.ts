
const Professions = document.getElementById("Professions")?.addEventListener("click", () => {alert(allProfessions)});

const teachers = document.getElementById("Teachers")?.addEventListener("click", () =>
alert("List of Teachers:\n" + allTeachers.map(teacher => `${teacher.teachername} - ${teacher.Professions}`).join("\n")));

const btnsearch = document.getElementById("search")?.addEventListener("click", search)

interface Teacher {
    teachername: string;
    Professions: string;
}


const allProfessions:string[] = [
    "math",
    "language",
    "history",
    "Geography",

]

const allTeachers:Teacher[] = [
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
]

let students = [
    {
        studentname: "bob",
        class:"th8"
    },
    {
        studentname: "jhon",
        class:"th2"
    },
    {
        studentname: "jasica",
        class:"th6"
    },
    {
        studentname: "mike",
        class:"th7"
    },
    {
        studentname: "adel",
        class:"th8"
    },
    {
        studentname: "oded",
        class:"th1"
    },
    {
        studentname: "harel",
        class:"th3"
    },
    {
        studentname: "",
        class:""
    },
]

function search(){
   const input = document.querySelector("input");
   if(!input){
    return
   }
    const inputValue = input.value.trim().toLocaleLowerCase();
    const studentFound = students.find(student => student.studentname.toLowerCase() === inputValue);
   if (studentFound) {
      alert(`${inputValue} is a students. Class: ${studentFound.class}`);
    return;
   } else {
    alert(`${inputValue} is not a students.`)
   }
}
