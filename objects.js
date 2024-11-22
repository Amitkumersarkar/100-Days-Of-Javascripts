const student = {
    fullName: "Amit Sarkar",
    age: 22,
    cgpa: 3.0,
    isPass: true,
};
console.log(student["fullName"]);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student["isPass"]);

// increase value in objects or changing keys value

student["age"] = student["age"] + 2;

// another way

console.log(student.age);