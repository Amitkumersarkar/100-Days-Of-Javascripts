/* Qs2.Write a code which can give grades 
to students according to their scores:*/

let scores = 80;
let grades;
if (scores >= 90 && scores <= 100) {
    grades = "A+";
}

else if (scores >= 80 && scores <= 89) {
    grades = "A";
}

else if (scores >= 70 && scores <= 79) {
    grades = "A-";
}

else if (scores >= 60 && scores <= 69) {
    grades = "B+";
}

else if (scores >= 50 && scores <= 59) {
    grades = "B-";
}

else if (scores >= 40 && scores <= 49) {
    grades = "C+";
}

else if (scores >= 33 && scores <= 39) {
    grades = "D";
}

else {
    grades = "F";
}
console.log("According to your scores, my grades was : ", grades);
