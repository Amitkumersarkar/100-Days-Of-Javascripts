// key value in for in loop
// objects deceleration
let student = {
    name: "Amit Sarkar",
    age: 22,
    cgpa: 3.0,
    isPass: true,
};

// for in loop

for (let key in student) {
    // finding key value here
    console.log("key = ", key, "value = ", student[key]);
}