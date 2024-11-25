/***
Qs.3:
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

 const Marks = 100;
if (Marks > 90 || Marks <= 100) {
    console.log("A");
}
else if (Marks > 80 || Marks <= 89) {
    console.log("B");
}
else if (Marks > 70 || Marks <= 79) {
    console.log("C");
}
else if (Marks > 60 || Marks <= 69) {
    console.log("D");
}
else if (Marks > 50 || Marks <= 0) {
    console.log("F");
}


