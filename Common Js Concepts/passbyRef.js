let student1 = { name: 'Amit ', dept1: 'CSE' };
let student2 = { name: 'Amrita ', dept2: 'CSE' };

function programmer(dept1, dept2) {
    dept1.name = 'Amrito';
    dept2.name = 'anik';
}

console.log(student1, student2);
programmer(student1, student2);
console.log(student1, student2);