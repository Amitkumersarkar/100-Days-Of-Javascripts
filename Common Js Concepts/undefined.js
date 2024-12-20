// there 8 ways to get undefined

/*
1) variable that is not initialized will give undefined
2) function with no return
3) parameter that is not passed will be undefined
4) if return has on the right side will return undefined
5) property that doesn't exist on an objects will give you undefined
...
...
....
*/
function nonNegative(a, b) {
    if (a < 0 || b < 0) {

        // return value are not defined
        return
    }

    return a + b;
}
const total = nonNegative(2, -5);
// console.log(total);

const student = { id: 283, name: 'Amit', age: 24 };
console.log(student.name, student.dept);

