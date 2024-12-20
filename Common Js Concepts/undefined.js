// there 8 ways to get undefined

/*
1) variable that is not initialized will give undefined
2) function with no return
3) parameter that is not passed will be undefined
4) if return has on the right side will return undefined
*/
function nonNegative(a, b) {
    if (a < 0 || b < 0) {

        // return value are not defined
        return
    }

    return a + b;
}
const total = nonNegative(2, -5);
console.log(total);